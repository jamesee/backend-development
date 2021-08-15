const quotient = require('./quotient')

describe('quotient', () => {
  describe('valid cases', () => {
    const cases = [
      [11, 5, 2],
      [5, 11, 0],
      [-11, 2, -5],
      [11, -2, -5],
      [-11, -2 , 5],
    ]
    
    test.each(cases)('x = %s, y = %s, returns %s',  (x, y, expected) => {
      const result = quotient(x, y)
      expect(result).toBe(expected)
    })
  })

  describe('invalid cases', () => {
    const cases = [
      [0, 0],
      [11, 0],
      [-11, 0]
    ]
    
    test.each(cases)('x = %s, y = %s, throws Error',  (x, y) => {
      // Must wrap inside a function
      expect(() => {
        quotient(x, y)
      }).toThrow()
    })
  })
})