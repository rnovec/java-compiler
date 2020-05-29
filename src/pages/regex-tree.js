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

function validate (regex, code) {
  return regex.re.test(code)
}

export function validateRecursive (code) {
  var regex = parent
  var tokens = []
  var childi = 0
  var lastParent = parent
  var lex = ''
  for (var j = 0, i = 0; j < code.length; j++) {
    lex = code.slice(i, j)
    if (regex.stop.test(code[j])) {
      var test = validate(regex, lex)
      if (test) {
        lastParent = regex
        console.log(regex.id, lex)
      } else if (lastParent.options.length > 1) {
        var err = true
        lastParent.options.forEach(element => {
          test = validate(element, lex)
          if (test) {
            regex = element
            console.log(regex.id, lex)
            err = false
          }
        })
        if (err) {
          console.log(lex, regex.re, childi, test)
        }
      } else {
        console.log(lex, regex.re, childi, test)
      }
      i = j
      childi = 0
      regex = regex.options[childi]
      if (!regex) break
    }
  }
}
