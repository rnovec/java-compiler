class Tree {
  constructor (root) {
    this._root = root || null
  }

  _traverse (callback) {
    const self = this
    function goThrough (node) {
      callback(node)
      node.children.forEach(child => {
        goThrough(child)
      })
    }
    goThrough(this._root, self)
  }

  _addNode (value, parentValue) {
    const newNode = {
      value,
      children: []
    }

    if (this._root === null) {
      this._root = newNode
      return
    }

    this._traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode)
      }
    })
  }

  _removeNode (value) {
    this._traverse(node => {
      node.children.forEach((childNode, index) => {
        if (childNode.value === value) {
          node.children.splice(index, 1)
        }
      })
    })
  }

  _search (value) {
    let returnNode = 'Not Found'
    this._traverse(node => {
      if (node.value === value) {
        returnNode = node
      }
    })
    return returnNode
  }

  _displayLeafs (parentValue) {
    const parentNode =
      typeof parentValue === 'string' ? this._search(parentValue) : parentValue
    const leafsRet = []
    if (parentValue.children && !parentValue.children.length) {
      return parentValue
    }

    parentNode.children.forEach(child => {
      leafsRet.push(this._displayLeafs(child))
    })

    return leafsRet.flat()
  }
}

class Node {
  constructor (value, children) {
    this.value = value
    this.children = children
  }
}

const tree = new Tree()
let lex = ''
const q = []
const code =
  '\nvoid abc()\n  a = ab + 112 + bb\na = ab + 1\n\nvoid void(int a)\n  a = ab + 1\nvoid abc(int a, int b, int a)\n  a = ab + 1'

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

tree._addNode('TD1')
tree._addNode('ID1', 'TD1')
tree._addNode('Routers', 'TD1')
tree._addNode('Desktop Computers', 'TD1')

tree._addNode('DEL1', 'ID1')
tree._addNode('Asus', 'ID1')

tree._addNode('DEL2', 'DEL1')
tree._addNode('END', 'DEL1')

tree._traverse(node => {
  console.log(node.value)
})

console.log(tree._displayLeafs('ID1'))
