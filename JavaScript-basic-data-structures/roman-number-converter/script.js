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
  catch(err) {
    error.innerHTML = err;
    output.appendChild(error);
  }
}

function convertNum(val) {
  let value = val;
  let temp = 0;
  let div = 1000;
  let str = '';
  do {
    temp = (value / div) * div;
    if (roman_num.has(temp)) {
      str += roman_num.get(temp);
    }
    else if (temp > div && temp < (div*4)) {
      let print = temp - div;
      for (let i = 0; i < print; i++) {
        str += roman_num.get(div);
      }
    }
    else if (temp > (div*5) && temp < (div*9)) {
      let print = temp - (div*5);
      for (let i = 0; i < print; i++) {
        str += roman_num.get(div*5);
      }
    }
    div /= 10;
  }
  while (temp >= 1);
  return str;
}