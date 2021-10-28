const btn = document.querySelector('.btn');
const body = document.body;
const indicator = document.querySelector('.color');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', function () {
  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    randomColor += hex[getRandomInt()];
  }
  body.style.backgroundColor = randomColor;
  indicator.textContent = randomColor;
});

function getRandomInt() {
  return Math.floor(Math.random() * hex.length);
}

// IIFE - Immediately Invoked function expressions
const num1 = 30;
const num2 = 50;

function add() {
  // can access global variables
  console.log(`the result is: ${num1 + num2}`);
}

add();

// this was useful when only var was available
// it was an emulation of the block scope
(function () {
  const num3 = 59;
  const num4 = 50;
  // these are not accessible out of the IIFE
  console.log('hello world');
})();

const result = (function () {
  const num3 = 59;
  const num4 = 50;
  // these are not accessible out of the IIFE
  console.log('hello world');
})(); //it is invoked immediately

// function and var declarations are hoisted
// var values are not hoisted
// let and const are not
