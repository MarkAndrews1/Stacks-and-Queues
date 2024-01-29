/** Node: node for a queue. */

const {LinkedList} = require('./linkedLists')

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.append(val)
    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this._list.isEmpty()) throw new Error("Can't dequeue from an empty queue")

    const removedVal = this._list.removeVal()
    this.size--
    return removedVal
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    return this._list.first.val
}

/** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this._list.isEmpty()
}
}

module.exports = Queue;
