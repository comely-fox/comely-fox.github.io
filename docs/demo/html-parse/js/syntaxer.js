class HTMLDocument {
  constructor() {
    this.isDocument = true
    this.childNodes = []
  }
}

class Node {}

class Element extends Node {
  constructor(token) {
    super(token)
    for (let k in token) {
      if (k === 'tokenStart') continue
      this[k] = token[k]
    }
    this.childNodes = []
  }
}

class Text extends Node {
  constructor(value) {
    super(value)
    this.value = value || ''
  }
}

let stack = []
let i = 0
export class HTMLSyntaticalParser {
  constructor() {
    stack = [new HTMLDocument()]
  }
  receiveToken(token) {
    let stackTop = stack[i]

    // 文本节点
    if (typeof token === 'string') {
      if (stackTop instanceof Text) {
        stackTop.value += token
      } else {
        const txt = new Text(token)
        stackTop.childNodes.push(txt)
        i++
        stack.push(txt)
      }
    } else if (stackTop instanceof Text) {
      // 文本节点出栈
      i--
      stack.pop()
      stackTop = stack[i]
    }

    // 元素节点
    if (token.tokenStart) {
      const e = new Element(token)
      // 对象的引用类型互相关联
      stackTop.childNodes.push(e)
      i++
      stack.push(e)
    }

    // 当前节点结束出栈
    if (token.tokenEnd) {
      stack.pop()
      i--
    }
  }

  getDomTree() {
    return stack[0]
  }
}
