class RegexNode {
  constructor (id, re, stop, parentId = null) {
    this.id = id
    this.re = re
    this.stop = stop
    this.parentId = parentId
    this.options = []
  }
}

const parent = new RegexNode('TD', /^(string|int|float|void)$/, /\s/)
const node1 = new RegexNode('SEP', /\s/, /[A-Za-z]|\d/)
const node2 = new RegexNode('ID', /^[A-Za-z]+$/, /[(]/)
const node3 = new RegexNode('DEL', /[(]/, /[A-Za-z]|\d|[)]/)
const node4 = new RegexNode('DEL', /[)]/, /\s|\n/)
const node5 = new RegexNode('TD', /(string|int|float)/, /\s/)
const node6 = new RegexNode('SEP', /\s/, /[A-Za-z]|\d/)
const node7 = new RegexNode('ID', /^[A-Za-z]+$/, /[)]|[,]/)
const node8 = new RegexNode('COM', /[,]/, /\s/)
const node9 = new RegexNode('SEP', /\n/, /\s/)

// funciones con o sin parametros
parent.options.push(node1)
node1.options.push(node2)
node2.options.push(node3)
node3.options.push(node4, node5)
node4.options.push(node9)
node5.options.push(node6)
node6.options.push(node7)
node7.options.push(node4, node5, node8)
node8.options.push(node5)

/**
 * Funcion para validar una expresion regular
 * apartir de un arbol
 * @param {*} code
 */
export function validateRecursive (code) {
  let regex = parent
  let childi = 0
  let lastParent = parent
  let lex = ''
  const tokens = []
  for (var j = 0, i = 0; j < code.length; j++) {
    lex = code.slice(i, j)
    if (regex.stop.test(code[j])) {
      var test = regex.re.test(lex)
      if (test) {
        lastParent = regex
        console.log(regex.id, lex)
        tokens.push({
          token: lex,
          type: regex.id
        })
      } else if (lastParent.options.length > 1) {
        var err = true
        lastParent.options.forEach(element => {
          test = element.re.test(lex)
          if (test) {
            regex = element
            console.log(regex.id, lex)
            tokens.push({
              token: lex,
              type: regex.id
            })
            err = false
          }
        })
        if (err) {
          console.log(lex, regex.re, childi, test)
          tokens.push({
            token: lex,
            type: regex.id,
            error: true
          })
        }
      } else {
        console.log(lex, regex.re, childi, test)
        tokens.push({
          token: lex,
          type: regex.id,
          error: true
        })
      }
      i = j
      childi = 0
      regex = regex.options[childi]
      if (!regex) break
    }
  }
  return tokens
}
