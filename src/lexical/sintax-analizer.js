/**
 * Base Token
 *
 * @param {String} type
 * @param {RegExp} re
 * @param {String} description
 */
class Token {
  constructor (type, re, description) {
    this.type = type
    this.re = re
    this.description = description || 'Unexpected Token'
  }

  gettok (lex, line) {
    const t = {
      lex,
      token: this.type
    }
    if (!this.re.test(lex)) {
      t.message = this.description
      t.error = true
      t.line = line
    }
    return t
  }
}

/**
 * Identifier Token
 *
 * @param {String} type
 * @param {RegExp} re
 * @param {String} description
 */
class IdentifierToken extends Token {
  gettok (lex, line) {
    const t = {
      lex,
      token: this.type
    }
    if (!this.re.test(lex) || /^(string|int|float|void)$/.test(lex)) {
      t.message = this.description
      t.error = true
      t.line = line
    }
    return t
  }
}

// regex patterns and description
const ID = new IdentifierToken('ID', /^[A-Za-z]+$/, 'Identifier Error')
const TD = new Token('TD', /^(string|int|float|void)$/, 'Type Error')
const DEL = new Token('DEL', /^\(|\)$/, 'Delimiter Error')
const SEP = new Token('SEP', /^,$/, 'Separator Error')
const AS = new Token('AS', /^={1}$/, 'Asignation Error')
const OP = new Token('OP', /^(\+|-|\*|\/){1}$/, 'Operator Error')
const CNE = new Token('CNE', /^\d+$/, 'Operand Error')

function multitok (regex, lex, numline) {
  const TOKENS = []
  regex.forEach((re, i) => {
    TOKENS.push(re.gettok(lex[i], numline))
  })
  return TOKENS
}

function splitter (code) {
  let lex = ''
  const q = []
  for (var i = 0; i < code.length; i++) {
    if (/\(|\)|,|(\+|-|\*|\/|=)/.test(code[i])) {
      q.push(lex)
      q.push(code[i])
      lex = ''
    } else if (/\s/.test(code[i])) {
      q.push(lex)
      lex = ''
    } else {
      lex += code[i]
    }
  }
  q.push(lex)
  return q.filter(q => q.length)
}

export function sintaxAnalyzer (input) {
  const LINES = []
  const TOKENS = []
  const OPERANDS = /(\+|-|\*|\/)/

  input.split('\n').forEach(code => {
    LINES.push({
      code,
      lexemes: splitter(code)
    })
  })
  LINES.forEach((line, numline) => {
    if (/\(\)$/.test(line.code)) {
      // funcion sin paramatros
      TOKENS.push(multitok([TD, ID, DEL, DEL], line.lexemes, numline))
    } else if (/\((\w|\d)*\s(\w|\d)*\)$/.test(line.code)) {
      // funcion con un parametro
      TOKENS.push(multitok([TD, ID, DEL, TD, ID, DEL], line.lexemes, numline))
    } else if (/([,]\s(\w|\d)*\s(\w|\d)*)+\)/.test(line.code)) {
      // funcion con parametros
      const acc = []
      let param = []
      acc.push(...multitok([TD, ID, DEL, TD, ID], line.lexemes, numline))
      line.lexemes.slice(5, -1).forEach(lex => {
        param.push(lex)
        if (param.length === 3) {
          acc.push(...multitok([SEP, TD, ID], param, numline))
          param = []
        }
      })
      acc.push(DEL.gettok(line.lexemes[line.lexemes.length - 1], numline))
      TOKENS.push(acc)
    } else if (OPERANDS.test(line.code)) {
      const acc = []
      let arit = ''
      acc.push(...multitok([ID, AS], line.lexemes, numline))
      line.lexemes.slice(2, line.lexemes.length).forEach(lex => {
        if (/\d+/.test(lex)) {
          acc.push(CNE.gettok(lex, numline))
        } else if (OPERANDS.test(lex)) {
          if (OPERANDS.test(arit)) {
            acc.push({
              lex: arit + lex,
              token: 'OP',
              error: true,
              message: 'Operator Error',
              line: numline
            })
          } else acc.push(OP.gettok(lex, numline))
        } else {
          acc.push(ID.gettok(lex, numline))
        }
        arit = lex
      })
      TOKENS.push(acc)
    }
    TOKENS.push([{ lex: '\n' }])
  })
  return TOKENS
}
