const
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
  ],
  CIRCLES_NUMBER = 1000

for (let i = 0; i < CIRCLES_NUMBER; i++) {
  const circle = document.createElement('div')

  circle.classList.add('circle')

  circle.addEventListener('mouseover', setColor)

  circle.addEventListener('mouseleave', removeColor)

  board.append(circle)
}

function setColor(event) {
  const
    element = event.target,
    color = getRandomColor()

  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target

  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}