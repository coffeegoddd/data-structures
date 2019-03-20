class PQ {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a,b) => a.priority - b.priority);
  }
}
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(key) {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = [];
    }
  }
  addEdge(v1,v2,w) {
    const adj1 = {};
    const adj2 = {};
    adj1.node = v2;
    adj1.weight = w;
    adj2.node = v1;
    adj2.weight = w;
    this.adjacencyList[v1].push(adj1);
    this.adjacencyList[v2].push(adj2);
  }
  shortestPath(start, end) {
    const nodes = new PQ();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    for (let key in this.adjacencyList) {
      if (key === start) {
        distances[key] = 0;
        nodes.enqueue(key, 0);
      }
      else {
        distances[key] = Infinity;
        nodes.enqueue(key, Infinity);
      }
      previous[key] = null;
    }
    while(nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        // build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let i = 0; i < this.adjacencyList[smallest].length; i += 1) {
          const nextNode = this.adjacencyList[smallest][i];
          const candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}