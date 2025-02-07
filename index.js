import Enemie from './enemie.js'
import Game from './game.js'

const canvas = document.querySelector('.canvas')
const boton = document.querySelector('.start-btn')
const botonRestart = document.querySelector('.start-btn2')
boton.addEventListener('click', start)
botonRestart.addEventListener('click', restart)
const startPage = document.querySelector('.start-page')
const gameOverr = document.querySelector('.gameover')
let astronaut

export const game = new Game()
const score = game.score

export function start () {
  astronaut = document.createElement('div')
  const scoreCanvas = document.createElement('div')
  scoreCanvas.classList.add('score')
  scoreCanvas.innerText = 'Score: ' + score
  canvas.appendChild(scoreCanvas)
  astronaut.classList.add('astronaut')
  startPage.classList.remove('see')
  startPage.classList.add('hide')
  canvas.appendChild(astronaut)

  if (game.platforms.length == 0) {
    game.moveAstronaut()
    game.createPlatforms(7)
  }
  game.astronautInitial()
  game.astronaut.jump()
}
export function setScore (score) {
  const scoreCanvas = document.querySelector('.score')
  scoreCanvas.innerText = 'Score: ' + score
}
export function restart () {
  for (let i = 0; i < game.platforms.length; i++) {
    clearInterval(game.platforms[i].timerIdplat)
    clearInterval(game.platforms[i].timerIdplat2)
    canvas.removeChild(game.platforms[i].visual)
  }
  game.platforms = []
  game.score = 0
  const scoreCanvas = document.querySelector('.score')
  canvas.removeChild(scoreCanvas)
  gameOverr.classList.remove('see')
  gameOverr.classList.add('hide')
  let astronaut = document.getElementsByClassName('astronaut')[0]
  canvas.removeChild(astronaut)
  astronaut = document.getElementsByClassName('astronaut')[0]
  start()
}

export default game
