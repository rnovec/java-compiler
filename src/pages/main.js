import { tokenize } from './tokens'

export const TD = /int|string|float|void/
export const ID = /[A-Za-z]+/
export const CNE = /\d+/
export const DEL = /[(]|[)]/
export const AS = /=/
export const OP = /[+]|[-]|[*]|[/]/
export const COMA = /,/
export const SEP = /\s|\n/
export const TYPE = /int|string|float/
export const FUNC = /int|string|float|void\s[A-Za-z]+[(](([)]|(int|string|float)\s[A-Za-z]+|[,]\s(int|string|float)\s[A-Za-z]+)*[)])\n/
export const ARIT = /([A-Za-z]+\s[=]\s[A-Za-z]+\s[+]|[-]|[*]|[/]\s[A-Za-z|\d+]+)/

export function getTokens (code) {
  return tokenize(code, { TD, ID, CNE, DEL, AS, OP, COMA, SEP }, 'Unexpected Token')
}
