class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null
    }
  }

class LinkedList{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    append(val){
        let newNode = new Node(val)

        if(!this.first){
          this.first = newNode
          this.last = newNode
        }else{
          this.last.next = newNode
          this.last = newNode
        }
    
        this.size++
    }

    removeVal(){
        let removedVal = this.first

        if(this.isEmpty()) throw new Error("Can't remove from an empty queue")

        this.first = this.first.next
        this.size--

        return removedVal.val
    }

    push(val) {
        let newNode = new Node(val)
    
        if(!this.first){
          this.first = newNode
          this.last = newNode
        }else{
          this.first = newNode
          this.first.next = newNode
        }
        this.size++
      }

    pop() {
        let removedVal = this.first
    
        if(this.isEmpty()) throw new Error("Can't remove from an empty stack")
    
        this.first = this.first.next
        this.size--
    
        return removedVal.val
      }


    peek() {
        return this.first.val
    }

  /** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {
        if(this.size > 0){
        return false
        }
        return true
    }
}

class DoublyLinkedList{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  appendRight(val){
    let newNode = new Node(val)

    if(!this.first){
      this.first = newNode
      this.last = newNode
    }else{
      newNode.prev = this.last
      this.last.next = newNode
      this.last = newNode
    }

    this.size++
  }

  appendLeft(val){
    let newNode = new Node(val)

    if(!this.first){
      this.first = newNode
      this.last = newNode
    }else{
      newNode.next = this.first
      this.first.prev = newNode
      this.first = newNode
    }

    this.size++
  }

  popLeft(){
    let removedVal = this.first

    if(this.isEmpty()) throw new Error("Can't remove from an empty queue")

    this.first = this.first.next

    if(this.first){
      this.first.prev = null
    }else{
      this.last = null
    }

    this.size--
    return removedVal.val
  }

  popRight(){
    let removedVal = this.last

    if(this.isEmpty()) throw new Error("Can't remove from an empty queue")

    this.last = this.last.prev

    if(this.last){
      this.last.next = null
    }else{
      this.first = null
    }

    this.size--
    return removedVal.val
  }

  peekLeft() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    }

    return this._list.head.val;
  }

  peekRight() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty");
    }

    return this._list.tail.val;
  }

  isEmpty() {
    return this.size === 0;
  }

}

module.exports = {
  LinkedList,
  DoublyLinkedList
};