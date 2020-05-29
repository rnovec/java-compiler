import { tokenize } from './tokenizer'

/**
 * Single parsers
 */
export const TD = /(string|int|float|void)/
export const ID = /[A-Za-z]+/
export const CNE = /\d+/
export const DEL = /[(]|[)]/
export const AS = /=/
export const OP = /([+]|[-]|[*]|[/])/
export const COMA = /,/
export const SEP = /\s|\n/

/**
 * Validators
 */
export const SPACE = /\s/
export const VAR_TYPE = /string|int|float/

/**
 * Complex validators
 */
export const FUNC = /(string|int|float|void)\s([A-Za-z]+)[(](([)]|(string|int|float)\s[A-Za-z]+|[,]\s(string|int|float)\s[A-Za-z]+)*[)])/g
export const ARIT = /^[A-Za-z]+\s[=]\s([A-Za-z]+|\d+)(\s([+]|[-]|[*]|\/)\s([A-Za-z]+|\d+))*$/g
export const FULL_PATTERN = /((string|int|float|void)\s([A-Za-z]+)[(](([)]|(string|int|float)\s[A-Za-z]+|[,]\s(string|int|float)\s[A-Za-z]+)*[)])\n)(^(\s\s|\t)[A-Za-z]+\s[=]\s([A-Za-z]+|\d+)(\s(\+|-|\*|\/)\s([A-Za-z]+|\d+))*$)/gm

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

const rules = [
  {
    id: 'TD',
    re: /^(string|int|float|void)$/,
    stop: /\s/
  },
  {
    id: 'SEP',
    re: /\s/,
    stop: /[A-Za-z]+|\d+/
  },
  {
    id: 'ID',
    re: /^[A-Za-z]+$/,
    stop: /[(]/
  },
  {
    id: 'DEL',
    re: /[(]/,
    stop: /[A-Za-z]+|\d+|[)]/
  },
  {
    id: 'DEL',
    re: /[)]/,
    stop: /\s|\n/,
    children: [
      {
        id: 'TD',
        re: /(string|int|float)/,
        stop: /\s/
      },
      {
        id: 'SEP',
        re: /\s/,
        stop: /[A-Za-z]+|\d+/
      },
      {
        id: 'ID',
        re: /^[A-Za-z]+$/,
        stop: /[)]|[,]/,
        end: true
      }
    ]
  },
  {
    id: 'SEP',
    re: /\n/,
    stop: /\s/
  }
]

const text = `voi2d abc(int 2a)\n a = a + 1`

var lex = ''
var rulei = 0
var tokens = []
var errors = []
var current = rules
var lastIndex = 0
for (var i = 0; i < text.length; i++) {
  lex += text[i]
  if (current[rulei]) {
    if (current[rulei].stop.test(text[i])) {
      if (current[rulei].re.test(lex.slice(0, -1))) {
        tokens.push(lex.slice(0, -1))
        console.log(rulei, lex.slice(0, -1), current[rulei].re, true)
      } else {
        console.log(rulei, lex.slice(0, -1), current[rulei].re, false)
        errors.push(lex.slice(0, -1))
      }
      lex = ''
      ++rulei
      --i
    }
  }
}

console.log(tokens)
console.log(errors)

export function getTokens (code) {
  let tokens = []
  if (FULL_PATTERN.test(code)) {
    tokens = tokenize(code, parsers, 'Unexpected Token')
    for (const key in parsers) {
      tokens
        .filter(t => t.type === key && t.type !== 'SEP')
        .forEach((t, i, arr) => {
          arr[i].type = t.type + ++i
        })
    }
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
