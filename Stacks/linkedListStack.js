// O(1) insertion and removal

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return this.size;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.size += 1;
    return this.size;
  }
  pop() {
    if (!this.first) return;
    if (this.size === 1) {
      const popped = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return popped;
    }
    const popped = this.first;
    this.first = popped.next;
    this.size -= 1;
    return popped;
  }
}

module.exports = Stack;
