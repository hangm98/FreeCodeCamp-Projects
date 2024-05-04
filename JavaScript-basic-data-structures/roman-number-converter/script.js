const input = document.getElementById('number');
const btn = document.getElementById('covert-btn');
const output = document.getElementById('output');
const roman_num = new Map([
                              [1, 'I'],
                              [4, 'IV'],
                              [5, 'V'],
                              [9, 'IX'],
                              [10, 'X'],
                              [40, 'XL'],
                              [50, 'L'],
                              [90, 'XC'],
                              [100, 'C'],
                              [400, 'CD'],
                              [500, 'D'],
                              [900, 'CM'],
                              [1000, 'M']
                             ]);

  input.addEventListener('keydown', e => {
    if (e.key === '\r') {
      e.preventDefault();
      checkValid(input.value);
    }
  });
  
  btn.addEventListener('click', () => {
    checkValid(input.value);
  });

function checkValid(val) {
  output.replaceChildren();
  const error = document.createElement('p')
  let value = val;
  try {
    if (value.trim() === ''|| isNaN(value))
    throw 'Please enter a valid number';
    if (value < 1)
    throw 'Please enter a number greater than or equal to 1';
    if (value > 3999)
    throw 'Please enter a number less than or equal to 3999';
    throw convertNum(val)
  }
  catch(str) {
    error.innerHTML = str;
    output.appendChild(error);
  }
}

function convertNum(val) {
  let temp = val;
  let quotient = 0;
  let str = '';
  //Sort map in descending order
  const new_map = new Map([...roman_num].sort((a,b) => b[0] - a[0]));
  /*Algorithm: if value >= number, divide and get quotient and remainder, print out the subtract number from quotient and
  print symbol that many times. Repeat until remainder is 0. */
    new_map.forEach((keys, values) => {
      if (temp >= values) {
        quotient = Math.floor(temp/values);
        temp = temp % values;
        for (let i = 0; i < quotient; i++) {
          str += keys;
        }
      }
      if (temp === 0) { return; }
    })
  return str;
}