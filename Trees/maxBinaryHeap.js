// insertion removal O(log n)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    const arr = this.values;
    let index = arr.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (arr[parentIndex] < arr[index]) {
      [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  extractMax() {
    const arr = this.values;
    const max = arr[0];
    const end = arr.pop();
    if (this.values.length) arr[0] = end;
    this.bubbleDown();
    return max;
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
        if (leftChild > element) {
          swap = leftIndex;
        }
      }
      if (rightIndex < arr.length) {
        rightChild = arr[rightIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

module.exports = MaxBinaryHeap;