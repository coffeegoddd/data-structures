// O(1) insertion and removal

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return this.size;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size += 1;
    return this.size;
  }
  dequeue() {
    if (!this.first) return;
    if (this.size === 1) {
      const deQd = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return deQd;
    }
    const deQd = this.first;
    this.first = deQd.next;
    this.size -= 1;
    return deQd;
  }
}

module.exports = Queue;