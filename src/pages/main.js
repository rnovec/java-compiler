import { tokenize } from "./tokens";

export const TD = /(int|string|float|void)/;
export const ID = /[A-Za-z]+/;
export const CNE = /\d+/;
export const DEL = /([(]|[)])/;
export const AS = /=/;
export const OP = /([+]|[-]|[*]|[/])/;
export const SEP = /(\s|\n|,)/;
export const TYPE = /(int|string|float)/;
export const ALL = /(int|string|float|void)\s[A-Za-z]+[(](([)]|(int|string|float)\s[A-Za-z]+|[,]\s(int|string|float)\s[A-Za-z]+)*[)])\n/g;
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

export function getTokens(code) {
  return tokenize(code, { TD, ID, CNE, DEL, AS, OP, SEP }, "Syntax Error");
}
