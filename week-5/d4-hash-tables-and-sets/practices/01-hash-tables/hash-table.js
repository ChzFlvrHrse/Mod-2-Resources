const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.numBuckets = numBuckets;
    this.data = Array(numBuckets).fill(null);
    this.capacity = numBuckets;
  }

  hash(key) {
    return Number(`0x${sha256(key).slice(0, 8)}`)
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let newPair = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!');
    }
    this.data[index] = newPair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    let newPair = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    if (this.data[index]) {
      newPair.next = this.data[index];
    }
    this.data[index] = newPair;
    this.count++;
  }

  insert(key, value) {
    let newPair = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    if (this.data[index]) {
      let curr = this.data[index];
      while(curr) {
        if (curr.key === key) {
          curr.value = value;
          return
        }
        curr = curr.next
      }
    }
    newPair.next = this.data[index];
    this.data[index] = newPair;
    this.count++;
  }
}


module.exports = HashTable;
