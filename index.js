import chalk from 'chalk'
import TiaVecina from './classes/TiaVecina.js'
import CompaneraCuriosa from './classes/CompaneraCuriosa.js'
import EstudianteEspia from './classes/EstudianteEspia.js'

const chismosas = [
  new TiaVecina('Doña Rosa', 7, 3),
  new CompaneraCuriosa('María Tech', 5, 4),
  new EstudianteEspia('Luisa Hacker', 6, 2),
]

for (let ronda = 1; ronda <= 2; ronda++) {
  console.log(chalk.gray(`\n--- Ronda ${ronda} ---`))
  chismosas.forEach(c => {
    c.recolectarInfo()
    c.contarChisme()
  })
}

console.log(chalk.inverse('\nEstadísticas finales:'))
chismosas.forEach(c => {
  const lvl = c.getGossipLevel()
  const rep = c.getReputation()
  const gossipColor = lvl >= 8 ? chalk.magenta : chalk.white
  const repColor = rep >= 7 ? chalk.hex('#FFA500') : chalk.black.bgWhite

  console.log(
    `${gossipColor(c.name)} ▶ Chisme: ${lvl.toFixed(1)} ${repColor(`Reputación: ${rep.toFixed(1)}`)}`
  )
})

const top = chismosas.reduce((prev, curr) =>
  curr.getGossipLevel() > prev.getGossipLevel() ? curr : prev
)
console.log(chalk.bold.magenta(`\nEl chisme más viral lo tiene: ${top.name}`))