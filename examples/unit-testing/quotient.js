function quotient (x, y) {
  if (y === 0) {
    throw Error
  }
  return Math.trunc(x / y)
}

module.exports = quotient