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
 * Complex parsers
 */
const FULL_PATTERN = /(\w+\s(\w+)[(](([)]|\w+\s\w+|[,]\s\w+\s\w+)*[)])\n)(^(\s\s|\t)\w+\s[=]\s(\w+|\d+)(\s(\+|-|\*|\/)\s(\w+|\d+))*$)/gm

const parsers = {
  TD,
  ID,
  CNE,
  DEL,
  AS,
  OP,
  SEP
}

/**
 * Generate tokens from code string
 * @param {String} code
 */
export function getTokens (code) {
  const tokens = sintaxAnalyzer(code).flat()

  // generate token ID with counter
  for (const key in parsers) {
    tokens
      .filter(t => t.token === key)
      .forEach((t, i, arr) => {
        t.error ? arr[i].token = 'ERLX' + t.token + ++i : arr[i].token = t.token + ++i
      })
  }
  return tokens
}

/**
 * Generate single tokens string from tokens object
 * @param {Object} tokens
 */
export function createTokensFile (tokens) {
  let tokensFile = ''
  tokens.forEach(t => {
    if (t.lex === '\n') tokensFile += t.lex
    else tokensFile += t.token + ' '
  })
  return tokensFile
}
