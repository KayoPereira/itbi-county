/**
 * @class Itbi
 * @description A class to return the ITBI value of a county
 * @param state - parameter to define the state UF
 * @param county - parameter to define the county
 * @param json_file - json file with the ITBI values
 */

const spData = require('./states/sp.json')

class Itbi {
  constructor(state, county) {
    this.state = state
    this.county = county
    this.json_file = spData
  }

  spItbi() {
    return this.json_file[`${this.county}`]
  }

  init() {
    const stateMethod = `${this.state.toLowerCase()}Itbi`

    if (typeof this[stateMethod] === 'function') {
      const value = this[stateMethod]()
      return parseFloat(value)
    } else {
      console.error(`Método para o estado ${this.state} não encontrado`)
    }
  }

  all() {
    return this.json_file
  }
}

export default Itbi
