/** Node: node for a stack. */

const {LinkedList} = require('./linkedLists')

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.size = 0;
    this._list = new LinkedList()
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.push(val)
    this.size++
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty()) throw new Error("Can't remove from an empty stack")

    let removedVal = this._list.pop()
    this.size--

    return removedVal
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this._list.first.val
}

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this._list.isEmpty()
}
}

module.exports = Stack;
