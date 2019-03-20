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
    this.adjacencyList[v1].push(adj2);
    this.adjacencyList[v2].push(adj1);
  }
}


