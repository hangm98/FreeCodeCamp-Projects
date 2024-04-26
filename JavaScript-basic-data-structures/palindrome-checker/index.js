const input = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome(val) {
  let y = val.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  let x = y.split('').reverse().join('');
  let str;
  if (x === y) {
    str = " is a palindrome";
  }
  else {
    str = " is not a palindrome";
  }
  
  //Display
  //console.log(p1);
  const p2 = document.createElement('p');
  p2.innerHTML = val + str;
  //console.log(p2).
  result.appendChild(p2);
}

function checkValid(val) {
  input.value = '';
  result.replaceChildren();
  if (val.trim() === '') {
    alert('Cannot check empty input!');
  }
  else {
    checkPalindrome(val);
  }
}

input.addEventListener('keypress', e => {
  if (e.key === '\r') {
    e.preventDefault();
    btn.addEventListener('click', () => {checkValid(input.value)});
  }
});

btn.addEventListener('click', () => {
  checkValid(input.value)});
