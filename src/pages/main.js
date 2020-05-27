import { tokenize } from './tokens'

export const FUNC_TYPES = /(int|string|float|void)/
export const VAR_TYPES = /(int|string|float)/
export const SPACE = /\s/
export const NEW_LINE = /\n/
export const NAMES = /[A-Za-z]+/
export const ALL = /(int|string|float|void)\s[A-Za-z]+[(](([)]|(int|string|float)\s[A-Za-z]+|[,]\s(int|string|float)\s[A-Za-z]+)*[)])/
// class MyRegExp extends RegExp {
//   [Symbol.matchAll] (str) {
//     let result = RegExp.prototype[Symbol.matchAll].call(this, str)
//     if (!result) {
//       return null
//     }
//     return Array.from(result)
//   }
// }
// var re = new MyRegExp(ALL)
// // var result = this.text.match(ALL)

export function getTokens (code) {
  return tokenize(
    code,
    { FUNC_TYPES, VAR_TYPES, SPACE, NAMES, NEW_LINE },
    'invalid'
  )
}
