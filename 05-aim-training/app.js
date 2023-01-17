const
  startBtn = document.querySelector('.start'),
  screens = document.querySelectorAll('.screen'),
  timeList = document.querySelector('#time-list'),
  timeEl = document.querySelector('#time'),
  board = document.querySelector('#board'),
  colors = [
    '#845EC2',
    '#D65DB1',
    '#FF6F91',
    '#FF9671',
    '#FFC75F',
    '#F9F871',
    '#2C73D2',
    '#0081CF',
    '#0089BA',
    '#008E9B',
    '#008F7A',
  ]

let
  time = 0,
  score = 0

startBtn.addEventListener('click', event => {
  event.preventDefault()

  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))

    screens[1].classList.add('up')

    startGame()
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++

    event.target.remove()

    createRandomCircle()
  }
})

function startGame() {
  setInterval(decreaseTime, 1000)

  createRandomCircle()

  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time

    if (current < 10) {
      current = `0${current}`
    }

    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')

  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
  const
    circle = document.createElement('div'),
    size = getRandomNumber(10, 60),
    {width, height} = board.getBoundingClientRect(),
    x = getRandomNumber(0, width - size),
    y = getRandomNumber(0, height -size),
    colors = getRandomColor()

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = `linear-gradient(229.99deg, ${colors[0]} 0%, ${colors[1]} 47%, ${colors[2]} 100%)`

  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  return [
    colors[getRand()],
    colors[getRand()],
    colors[getRand()]
  ]
}

function getRand() {
  return Math.floor(Math.random() * colors.length)
}

function winTheGame() {
  function kill() {
    const circle = document.querySelector('.circle')

    if (circle) {
      circle.click()
    }
  }

  setInterval(kill, 42)
}