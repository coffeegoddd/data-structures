//
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(key) {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = [];
    }
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      return;
    }
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
    );
  }
  removeVertex(v) {
    while (this.adjacencyList[v].length) {
      const adjV = this.adjacencyList[v].pop();
      this.removeEdge(v, adjV);
    }
    delete this.adjacencyList[v];
  }
  dfsR(v, seen = {}, results = []) {
    if (!this.adjacencyList[v].length) {
      return results;
    }
    seen[v] = true;
    results.push(v);
    for (let i = 0; i < this.adjacencyList[v].length; i += 1) {
      const vertex = this.adjacencyList[v][i];
      if (!seen[vertex]) this.dfsR(vertex, seen, results);
    }
    return results;
  }
  dfsI(v, seen = {}, results = []) {
    const stack = [];
    stack.push(v);
    seen[v] = true;
    while (stack.length) {
      v = stack.pop();
      results.push(v);
      this.adjacencyList[v].forEach(adj => {
        if (!seen[adj]) {
          seen[adj] = true;
          stack.push(adj);
        }
      });
    }
    return results;
  }
  bfs(v, seen={}, results=[]) {
    const que = [];
    que.push(v);
    seen[v] = true;
    while(que.length) {
      v = que.shift();
      results.push(v);
      this.adjacencyList[v].forEach(adj => {
        if (!seen[adj]) {
          seen[adj] = true;
          que.push(adj)
        }
      });
    }
    return results;
  }
}

module.exports = Graph;