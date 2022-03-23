'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const utils = require('./utils')
const R = require('ramda')

function prefixedList (list) {
  la(is.strings(list), 'expected list of strings', list)
  if (is.empty(list)) {
    return ''
  }
  if (list.length === 1) {
    return list[0]
  }

  const first = list[0]
  const shortestLength = utils.shortest(list)
  let prefix = ''
  for (let k = 0; k < shortestLength; k += 1) {
    const test = first.substr(0, k)
    const everyStarts = R.all(R.startsWith(test))
    if (everyStarts(list)) {
      prefix = test
    }
  }

  if (prefix) {
    const prefixLength = prefix.length
    const withoutPrefix = s => s.substr(prefixLength)
    const remains = list.map(withoutPrefix)
    return `${prefix}{${remains.join(', ')}}`
  }
  return list.join(', ')
}

module.exports = prefixedList
