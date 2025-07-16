import { inspect } from 'util'

export default class Chismosa {
  #reputation
  #gossipLevel

  constructor(name, reputation = 5, gossipLevel = 5) {
    if (new.target === Chismosa) {
      throw new Error('No se puede instanciar directamente la clase abstracta Chismosa')
    }
    this.name = name
    this.#reputation  = this._clamp(reputation)
    this.#gossipLevel = this._clamp(gossipLevel)
  }

  // Mantiene valores entre 0 y 10
  _clamp(value) {
    return Math.min(10, Math.max(0, value))
  }

  getReputation() {
    return this.#reputation
  }

  getGossipLevel() {
    return this.#gossipLevel
  }

  // Métodos "protegidos" para subclases
  _setReputation(val) {
    this.#reputation = this._clamp(val)
  }

  _setGossipLevel(val) {
    this.#gossipLevel = this._clamp(val)
  }

  // Métodos abstractos
  recolectarInfo() {
    throw new Error('Método recolectarInfo() debe implementarse en la subclase')
  }

  contarChisme() {
    throw new Error('Método contarChisme() debe implementarse en la subclase')
  }

  // Representación legible
  [inspect.custom]() {
    return `${this.name} ▶ Rep: ${this.getReputation()} | Chisme: ${this.getGossipLevel()}`
  }
}