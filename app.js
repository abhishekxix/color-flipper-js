const btn = document.querySelector('.btn')
const body = document.body
const indicator = document.querySelector('.color')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', function () {
  let randomColor = '#'
  for (let i = 0; i < 6; i++) {
    randomColor += hex[getRandomInt()]
  }
  body.style.backgroundColor = randomColor
  indicator.textContent = randomColor
})

function getRandomInt() {
  return Math.floor(Math.random() * hex.length)
}
