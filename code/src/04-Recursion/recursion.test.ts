import { sumAll, sumAll2 } from "./recursion"

describe('Recursion', () => {
  it('should sum all numbers in an array', () => {
    expect(sumAll([])).toBe(0)
    expect(sumAll([1])).toBe(1)
    expect(sumAll([1, 2])).toBe(3)
  })

  it('should sum all numbers with functional style', () => {
    expect(sumAll2([])).toBe(0)
    expect(sumAll2([1])).toBe(1)
    expect(sumAll2([1, 2])).toBe(3)
  })
})