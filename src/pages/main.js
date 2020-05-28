import { tokenize } from './tokenizer'

/**
 * Single parsers
 */
export const TD = /string|int|float|void/
export const ID = /[A-Za-z]+/
export const CNE = /\d+/
export const DEL = /[(]|[)]/
export const AS = /=/
export const OP = /[+]|[-]|[*]|[/]/
export const COMA = /,/
export const SEP = /\s|\n/
export const TYPE = /string|int|float/

/**
 * Complex validators
 */
export const FUNC = /(string|int|float|void)\s([A-Za-z]+)[(](([)]|(string|int|float)\s[A-Za-z]+|[,]\s(string|int|float)\s[A-Za-z]+)*[)])/g
export const ARIT = /([A-Za-z])+\s([=])\s([A-Za-z]+|\d+)(\s([+]|[-]|[*]|[/])\s([A-Za-z]+|\d+))*/g
export const FULL_PATTERN = /(string|int|float|void)\s([A-Za-z]+)[(](([)]|(string|int|float)\s[A-Za-z]+|[,]\s(string|int|float)\s[A-Za-z]+)*[)])[\n|\s]+([A-Za-z])+\s([=])\s([A-Za-z]+|\d+)(\s([+]|[-]|[*]|[/])?\s([A-Za-z]+|\d+))*/gm

const parsers = {
  TD,
  ID,
  CNE,
  DEL,
  AS,
  OP,
  COMA,
  SEP
}

const operations = [ID, AS, /\d+|[A-Za-z]+/, /([+]|[-]|[*]|[/])?/]
export function getTokens (code) {
  let tokens = []
  let lines = []
  tokens = tokenize(code, parsers, 'Unexpected Token')
  for (const key in parsers) {
    tokens
      .filter(t => t.type === key && t.type !== 'SEP')
      .forEach((t, i, arr) => {
        arr[i].type = t.type + ++i
      })
  }
  return tokens
}

export function createTokensFile (tokens) {
  let tokensFile = ''
  tokens.forEach(t => {
    if (t.type === 'SEP') tokensFile += t.token
    else tokensFile += t.type + ' '
  })
  return tokensFile
}

export function validate (errors, tokensFile) {
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
