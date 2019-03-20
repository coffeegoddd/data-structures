
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let prime = 31
    for (let i = 0; i < Math.min(key.length, 100); i += 1) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  get(k) {
    const index = this._hash(k);
    if (this.keyMap[index]) {
      return this.keyMap[index].filter((tuple) => {
        return tuple[0] === k;
      })[0][1];
    }
  }
  set (k, v) {
    const index = this._hash(k);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([k,v]);
  }
  values() {
    const vals = [];
    for (let i = 0; i < this.keyMap.length; i += 1) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j += 1) {
          if (!vals.includes(this.keyMap[i][j][1])) {
            vals.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return vals;
  }
}

