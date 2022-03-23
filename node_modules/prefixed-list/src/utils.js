const R = require('ramda')

const lengths = R.map(R.prop('length'))

const shortest = (list) =>
  R.reduce(R.min, Infinity, lengths(list))

module.exports = {
  lengths,
  shortest
}
