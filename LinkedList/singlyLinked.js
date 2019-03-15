// O(1) insertions to the head and tail
// O(n) traversal, find a specific node


class Node {
  constructor (data) {
    this.val = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length += 1;
      return this;
    }
  }

  pop() {
    if (!this.head) return;
    if (this.length === 1) {
      const saved = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return saved;
    }
    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    return curr;
  }

  shift () {
    if (!this.head) return;
    if (this.length === 1) {
      const oldHead = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead; 
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length -= 1;
    return oldHead;
  }

  unshift (val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
      this.length += 1;
      return this;
    }
    newHead.next = this.head;
    this.head = newHead;
    this.length += 1;
    return this;
  }

  traverse (cb) {
    let curr = this.head;
    while(curr) {
      cb(curr);
      curr = curr.next;
    }
  }

  get (index) {
    if (index < 0 || index >= this.length) return;
    let curr = this.head;
    let count = 0;
    while (count !== index) {
      curr = curr.next;
      count += 1;
    }
    return curr;
  }

  set (index, val) {
    const curr = this.get(index);
    if (!curr) return false;
    curr.val = val;
    return true;
  }

  insert (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const prev = this.get(index - 1);
    const oldNode = prev.next;
    const newNode = new Node(val);
    prev.next = newNode;
    newNode.next = oldNode;
    this.length += 1;
    return true;
  }

  remove (index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    const oldNode = prev.next;
    prev.next = oldNode.next;
    this.length -= 1;
    return oldNode;
  }

  print() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }

  reverse () {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}



