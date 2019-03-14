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
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const oldNode = this.get(index)
    const prev = this.get(index - 1);
    const newNode = new Node(val);
    prev.next = newNode;
    newNode.next = oldNode;
    return true;
  }
}


const myList = new SinglyLinkedList();
myList.push('a');
myList.push('b');
myList.push('c');
myList.push('d');
myList.pop();
myList.push('d');
console.log(myList);


