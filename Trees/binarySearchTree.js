const Queue = require('../Queues/linkedListQueue');
// O(log n) in average case

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (curr) {
      if (curr.val === val) return;
      if (curr.val > val) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }
  find(val) {
    if (!this.root) return;
    let curr = this.root;
    while (curr) {
      if (curr.val === val) return curr;
      if (curr.val > val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return;
  }
  bfs() {
    if (!this.root) return;
    const data = [];
    const q = new Queue();
    let node;
    q.enqueue(this.root);
    while (q.size > 0) {
      node = q.dequeue();
      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
      data.push(node.val);
    }
    return data;
  }
  dfsPre(node = this.root, data = []) {
    if (!node) return data;
    data.push(node.val)
    if (node.left) data = data.concat(this.dfsPre(node.left));
    if (node.right) data = data.concat(this.dfsPre(node.right));
    return data;
  }
  dfsPost(node = this.root, data = []) {
    if (!node) return data;
    if (node.left) data = data.concat(this.dfsPost(node.left));
    if (node.right) data = data.concat(this.dfsPost(node.right));
    data.push(node.val);
    return data;
  }
  dfsIn(node = this.root, data = []) {
    if (!node) return data;
    if (node.left) data = data.concat(this.dfsIn(node.left));
    data.push(node.val);
    if (node.right) data = data.concat(this.dfsIn(node.right));
    return data;
  }
}

module.exports = BinarySearchTree;