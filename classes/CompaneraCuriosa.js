import Chismosa from './Chismosa.js'

export default class CompaneraCuriosa extends Chismosa {
  recolectarInfo() {
    console.log(`${this.name}: Hace preguntas aparentemente profesionales a los compañeros de trabajo`)
    const delta = Math.random() * 1
    this._setGossipLevel(this.getGossipLevel() + delta)
  }

  contarChisme() {
    console.log(`${this.name}: Comenta el chisme como ejemplo de vida en el trabajo`)
    const repDelta = 1 + Math.random() * 1
    this._setReputation(this.getReputation() + repDelta)
  }
}