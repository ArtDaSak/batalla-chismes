import Chismosa from './Chismosa.js'

export default class EstudianteEspia extends Chismosa {
  recolectarInfo() {
    console.log(`${this.name}: Lee chats ajenos desde el último puesto del salón`)
    const delta = 2 + Math.random() * 1
    this._setGossipLevel(this.getGossipLevel() + delta)
  }

  contarChisme() {
    console.log(`${this.name}: Filtra el chisme por estados en WhatsApp`)
    const repDelta = -1 - Math.random() * 1
    this._setReputation(this.getReputation() + repDelta)
  }
}