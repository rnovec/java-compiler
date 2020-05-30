/**
 * Regex Node
 *
 * @param {String} id
 * @param {RegExp} re
 * @param {RegExp} stop
 * @param {String} description
 */
class RegexNode {
  constructor (id, re, stop, description = 'Unexpected Token') {
    this.id = id
    this.re = re
    this.stop = stop
    this.description = description
    this.options = []
  }
}

// create regex nodes patterns
const TD1 = new RegexNode(
  'TD',
  /^(string|int|float|void)$/,
  /\s/,
  'Type Error'
)
const SPC1 = new RegexNode('SPC', /\s/, /[A-Za-z]|\d/)
const ID1 = new RegexNode('ID', /^[A-Za-z]+$/, /\(|\[/, 'Identifier Error')
const DEL1 = new RegexNode(
  'DEL',
  /\(/,
  /[A-Za-z]|\d|[)]/,
  'Start Delimiter Error'
)
const DEL2 = new RegexNode('DEL', /[)]/, /\s|\n/, 'End Delimiter Error')
const TD2 = new RegexNode('TD', /(string|int|float)/, /\s/, 'Type Error')
const SPC2 = new RegexNode('SPC', /\s/, /[A-Za-z]|\d/)
const ID2 = new RegexNode('ID', /^[A-Za-z]+$/, /[)]|[,]/, 'Identifier Error')
const SEP1 = new RegexNode('SEP', /[,]/, /\s/, 'Comma Error')
const SPC3 = new RegexNode('SPC', /\n/, /\s/)

// functions rules definition
TD1.options.push(SPC1) // Data Type follow by Separator
SPC1.options.push(ID1) // Separator follow by Identifier
ID1.options.push(DEL1) // Identifier follow by Start Delimiter
DEL1.options.push(DEL2, TD2) // Start Delimiter follow by End Delimiter or Data Type
DEL2.options.push(SPC3) // End Delimiter follow by Separator
TD2.options.push(SPC2) // Data Type follow by Separator
SPC2.options.push(ID2) // Separator follow by Identifier
ID2.options.push(DEL2, TD2, SEP1) // Identifier follow by Delimiter, Data Type or Comma
SEP1.options.push(TD2) // End Line

// for artimentic operations definition
const SPC4 = new RegexNode('SPC', /\s+/, /[A-Za-z]|\d/)
const ID3 = new RegexNode('ID', /^[A-Za-z]+$/, /\s/, 'Identifier Error')
const SPC5 = new RegexNode('SPC', /^\s$/, /[=]/)
const AS1 = new RegexNode('AS', /^\s{0,1}={1}$/, /\s/, 'Asign Symbol Error')
const OP1 = new RegexNode('OP', /^\s{0,1}([+]|[-]|[/]|[*]){1}$/, /\s/, 'Operator Error')
const SPC6 = new RegexNode('SPC', /\s/, /[A-Za-z]|\d/)
const ID4 = new RegexNode('ID', /^\s{0,1}([A-Za-z]+)$/, /\s/, 'Identifier Error')
const CNE1 = new RegexNode('CNE', /^\d+$/, /\s/, 'Operand Error')

SPC3.options.push(SPC4)
SPC4.options.push(ID3)
ID3.options.push(SPC5)
SPC5.options.push(AS1)
AS1.options.push(ID4, CNE1)
ID4.options.push(OP1)
CNE1.options.push(OP1)
OP1.options.push(SPC6)
SPC6.options.push(ID4, CNE1)

/**
 * RegexTree
 *
 * - Accept a RegexNode as parent node
 *
 * @param {RegexNode} root initial regex node
 */
class RegexTree {
  constructor (root) {
    this.root = root
  }

  /**
   * - Accepts a code string for parsing
   * - Returns an array of token objects
   *
   * @param {String} code
   */
  validate (code) {
    let regex = this.root
    let childi = 0
    let lastParent = regex
    let lex = ''
    const tokens = []

    // loop for each character in code
    for (var j = 0, i = 0; j < code.length; j++) {
      lex = code.slice(i, j) // only match substring
      // lex = lex.replace(/\s/, '')
      // test if substring is a stop
      if (regex.stop.test(code[j])) {
        var test = regex.re.test(lex)
        if (test) {
          // update lastParent visited
          // and push token object
          lastParent = regex
          // console.log(regex.id, lex)
          tokens.push({
            token: lex,
            type: regex.id
          })
        } else if (lastParent.options.length > 1) {
          // if has children to validate
          // verify if error exists
          var err = true
          lastParent.options.forEach(child => {
            test = child.re.test(lex)
            if (test) {
              regex = child // update current regex
              // console.log(regex.id, lex)
              tokens.push({
                token: lex,
                type: regex.id
              })
              err = false
            }
          })
          if (err) {
            // if error persist in children push token error object
            console.log(lex, regex.re, childi, test)
            tokens.push({
              token: lex,
              type: regex.id,
              description: regex.description,
              error: true
            })
          }
        } else {
          // if error persist push token error object
          console.log(lex, regex.re, childi, test)
          tokens.push({
            token: lex,
            type: regex.id,
            description: regex.description,
            error: true
          })
        }
        i = j // update start slice
        childi = 0 // default first child
        regex = regex.options[childi] // current regex = first regex child
        if (!regex) break // stop if no child to match
      }
    }
    return tokens
  }
}
export default new RegexTree(TD1)
