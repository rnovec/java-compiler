import { tokenize } from './tokenizer'
import { sintaxAnalyzer } from './sintax-analizer'

/**
 * Single parsers
 */
const TD = /(string|int|float|void)/
const ID = /[A-Za-z]+/
const CNE = /\d+/
const DEL = /[(]|[)]/
const AS = /=/
const OP = /([+]|[-]|[*]|[/])/
const SEP = /,/

/**
 * Generate tokens from code string
 * @param {String} code
 */
export function getTokens (code) {
  let lexemes = []
  let tokens = []
  let acc = {}
  const counters = {
    TD: 0,
    ID: 0,
    CNE: 0,
    DEL: 0,
    AS: 0,
    OP: 0,
    SEP: 0
  }
  if (!/(;|:|{|}|\[|\]|\.|\?|¿|\$|#)/.test(code)) {
    tokens = sintaxAnalyzer(code).flat()
    tokens.forEach((t, i, arr) => {
      console.log(t.lex)
      if (t.lex.length) {
        if (lexemes.indexOf(t.lex) === -1) {
          lexemes.push(t.lex)
          arr[i].first = true
          counters[t.token] += 1
          arr[i].token = t.token + counters[t.token]
          acc[t.lex] = arr[i].token
        } else {
          arr[i].token = acc[t.lex]
        }
        if (t.error) arr[i].token = 'ERLX' + arr[i].token
      }
    })
  }

  return {
    tokens,
    counters
  }
}

/**
 * Generate single tokens string from symbols object
 * @param {Object} symbols
 */
export function createTokensFile (symbols) {
  let tokensFile = ''
  symbols.forEach(t => {
    if (t.lex === '\n') tokensFile += t.lex
    else tokensFile += t.token + ' '
  })
  return tokensFile.replace(/\n\n/g, '\n')
}
