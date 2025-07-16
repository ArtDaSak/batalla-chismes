import Chismosa from './Chismosa.js'

export default class TiaVecina extends Chismosa {
  recolectarInfo() {
    console.log(`${this.name}: Aprovecha la reunión del barrio para escuchar discretamente`)
    const delta = 2 + Math.random() * 2
    this._setGossipLevel(this.getGossipLevel() + delta)
  }

  contarChisme() {
    console.log(`${this.name}: Difunde el chisme mientras ofrece café`)
    const repDelta = -Math.random()
    this._setReputation(this.getReputation() + repDelta)
  }
}