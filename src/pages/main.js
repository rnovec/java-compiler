import { tokenize } from './tokenizer'
import { validateRecursive } from './regex-tree'

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

export function getTokens (code) {
  let tokens = []
  if (FULL_PATTERN.test(code)) {
    tokens = tokenize(code, parsers, 'Unexpected Token')
  } else {
    tokens = validateRecursive(code)
    console.log(tokens)
  }
  for (const key in parsers) {
    tokens
      .filter(t => t.type === key && t.type !== 'SEP')
      .forEach((t, i, arr) => {
        t.error ? arr[i].type = 'ERLX' + t.type + ++i : arr[i].type = t.type + ++i
      })
  }

  return tokens
}

export function createTokensFile (tokens) {
  let tokensFile = ''
  tokens.forEach(t => {
    if (t.token === '\n') tokensFile += t.token
    if (t.type === 'SEP') tokensFile += ''
    else tokensFile += t.type + ' '
  })
  return tokensFile
}

export function getErrors (errors, tokensFile) {
  errors.forEach(err => {
    let index = null
    tokensFile.split('\n').forEach((el, i) => {
      if (el.indexOf(err.type) !== -1) index = i
    })
    err.line = index
    return err
  })
  return errors
}
