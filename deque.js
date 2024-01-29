const {DoublyLinkedList} = require('./linkedLists')

class Deque {
    constructor() {
      this._list = new DoublyLinkedList();
      this.size = 0;
    }
  
    appendLeft(val) {
      this._list.prepend(val);
      this.size++;
    }
  
    appendRight(val) {
      this._list.append(val);
      this.size++;
    }
  
    removeLeft() {
      if (this._list.isEmpty()) {
        throw new Error("Can't remove from an empty deque");
      }
  
      const removedVal = this._list.removeHead();
      this.size--;
  
      return removedVal;
    }
  
    removeRight() {
      if (this.isEmpty()) {
        throw new Error("Can't remove from an empty deque");
      }
  
      const removedVal = this._list.removeTail();
      this.size--;
  
      return removedVal;
    }
  
    peekLeft() {
      return this._list.peekLeft()
    }
  
    peekRight() {
      return this._list.peekRight()
    }
  
    isEmpty() {
      return this._list.isEmpty();
    }
  }

  module.exports = Deque;