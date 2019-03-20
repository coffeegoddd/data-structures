// insertion removal O(log n)

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  dequeue() {
    const arr = this.values;
    const min = arr[0];
    const end = arr.pop();
    if (this.values.length) arr[0] = end;
    this.bubbleDown();
    return min;
  }
  bubbleDown() {
    const arr = this.values;
    let index = 0;
    let leftChild;
    let rightChild;
    while (true) {
      let swap = null;
      let element = arr[index];
      let leftIndex = (2 * index) + 1;
      let rightIndex = (2 * index) + 2;
      if (leftIndex < arr.length) {
        leftChild = arr[leftIndex];
        if (leftChild.priority < element.priority) {
          swap = leftIndex;
        }
      }
      if (rightIndex < arr.length) {
        rightChild = arr[rightIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightIndex;
        }
      }
      if (swap === null) break;
      arr[index] = arr[swap];
      arr[swap] = element;
      index = swap;
    }
  }
}

module.exports = PriorityQueue;
