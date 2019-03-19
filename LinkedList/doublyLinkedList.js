// O(1) insertions to the head and tail
// O(n) traversal, find a specific node
// uses more memory than singlyLinkedList

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) { // O(1)
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
  pop() { // O(1)
    if (!this.length) return;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldTail;
    }
    this.tail = oldTail.prev;
    this.tail.next = null;
    oldTail.prev = null;
    this.length -= 1;
    return oldTail;
  }
  shift() { // O(1)
    if (!this.length) return;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length -= 1;
    return oldHead;
  }
  unshift(val) { // O(1)
    const newHead = new Node(val);
    if (!this.length) return this.push(val);
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = newHead;
    this.length += 1;
    return this;
  }
  get(index) { // O(n)
    if (index < 0 || index >= this.length) return;
    const mid = Math.floor(this.length - 1 / 2);
    if (index < mid) {
      // count from zero
      let count = 0;
      let curr = this.head;
      while (count !== index) {
        curr = curr.next;
        count += 1;
      }
      return curr;
    } else {
      // count from end
      let count = this.length - 1;
      let curr = this.tail;
      while (count !== index) {
        curr = curr.prev;
        count -= 1;
      }
      return curr;
    }
  }
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const node = this.get(index);
    const newNode = new Node(val);
    const prev = node.prev;
    prev.next = newNode;
    newNode.prev = prev;
    node.prev = newNode;
    newNode.next = node;
    this.length += 1;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const node = this.get(index);
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null;
    this.length -= 1;
    return node;
  }
}

module.exports = DoublyLinkedList;