import Itbi from '.'
const spData = require('./states/sp.json')

describe('Itbi', () => {
  const ItbiAN = new Itbi('SP', 'anhembi', spData)
  const ItbiSP = new Itbi('SP', 'são paulo', spData)
  const ItbiSJRP = new Itbi('SP', 'são josé do rio preto', spData)

  it('should return the itbi value of Anhembi ', () => {
    expect(ItbiAN.init()).toBe(4)
  })

  it('should return the itbi value of São paulo ', () => {
    expect(ItbiSP.init()).toBe(3)
  })

  it('should return the itbi value of São josé do rio preto ', () => {
    expect(ItbiSJRP.init()).toBe(2)
  })

  it('should return the itbi value of all counties ', () => {
    expect(ItbiSP.all()).toEqual(spData)
  })
})
