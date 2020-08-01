const tinynlp = require('./early-parser')

var grammar = new tinynlp.Grammar([
  'R -> S',
  'S -> S add_sub M | M | num',
  'M -> M mul_div T | T | num',
  'T -> num'
])

// Define function, which will classify tokens into terminal types
grammar.terminalSymbols = function (token) {
  // Actually, this method might be customized
  // to use some more sophisticated classification mechanisms

  if ('+' === token || '-' === token) return ['add_sub']
  if ('*' === token || '/' === token) return ['mul_div']
  if (token.match(/^\d+$/)) return ['num']
  // It is also possible that classifier returns
  // more than one terminal symbol, e.g.: ['term1', 'term2']

  // Otherwise:
  throw new Error("Can't recognize token: " + token)
}

// You have to tokenize input by yourself!
// Creating array of tokens
var tokens = '22 + 3 * 4'.split(' ')

// Parsing
var rootRule = 'R'
var chart = tinynlp.parse(tokens, grammar, rootRule)

// Get array with all parsed trees
// In case of ambiguous grammar - there might be more than 1 parsing tree
var trees = chart.getFinishedRoot(rootRule).traverse()

// Iterate over all parsed trees and display them on HTML page
for (var i in trees) {
  console.log(JSON.stringify(trees[i]))
}
