import { tokenize } from './tokenizer'
import regexValidator from './regex-tree'

/**
 * Single parsers
 */
const TD = /(string|int|float|void)/
const ID = /[A-Za-z]+/
const CNE = /\d+/
const DEL = /[(]|[)]/
const AS = /=/
const OP = /([+]|[-]|[*]|[/])/
const COM = /,/
const SEP = /\s|\n/

/**
 * Complex parsers
 */
const FUNC = /(string|int|float|void)\s([A-Za-z]+)[(](([)]|(string|int|float)\s[A-Za-z]+|[,]\s(string|int|float)\s[A-Za-z]+)*[)])/g
const ARIT = /^[A-Za-z]+\s[=]\s([A-Za-z]+|\d+)(\s([+]|[-]|[*]|\/)\s([A-Za-z]+|\d+))*$/g
const FULL_PATTERN = /((string|int|float|void)\s([A-Za-z]+)[(](([)]|(string|int|float)\s[A-Za-z]+|[,]\s(string|int|float)\s[A-Za-z]+)*[)])\n)(^(\s\s|\t)[A-Za-z]+\s[=]\s([A-Za-z]+|\d+)(\s(\+|-|\*|\/)\s([A-Za-z]+|\d+))*$)/gm

const parsers = {
  TD,
  ID,
  CNE,
  DEL,
  AS,
  OP,
  COM,
  SEP
}

/**
 * Generate tokens from code string
 * @param {String} code
 */
export function getTokens (code) {
  let tokens = []

  // if match full paterns
  // then use tiny tokenizer
  // else use compex validator
  if (FULL_PATTERN.test(code)) {
    tokens = tokenize(code, parsers, 'Unexpected Token')
  } else {
    tokens = regexValidator.validate(code)
    console.log(tokens)
  }

  // generate token ID with counter
  for (const key in parsers) {
    tokens
      .filter(t => t.type === key && t.type !== 'SEP')
      .forEach((t, i, arr) => {
        t.error ? arr[i].type = 'ERLX' + t.type + ++i : arr[i].type = t.type + ++i
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
    if (t.token === '\n') tokensFile += t.token
    if (t.type === 'SEP') tokensFile += ''
    else tokensFile += t.type + ' '
  })
  return tokensFile
}

/**
 * Filter errors and find line error
 * @param {Array} errors
 * @param {String} tokensFile
 */
export function getErrors (errors, tokensFile) {
  errors.forEach(err => {
    let index = null
    // try to find token error ID
    // in tokenFile and get line index
    tokensFile.split('\n').forEach((el, i) => {
      if (el.indexOf(err.type) !== -1) index = i
    })
    err.line = index
    return err
  })
  return errors
}
