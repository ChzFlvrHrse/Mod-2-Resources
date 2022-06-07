class DynamicArray {

  constructor(defaultSize = 4) {
    this.defaultSize = defaultSize;

    this.capacity = this.defaultSize;
    this.length = 0;
    this.data = new Array(this.defaultSize);
  }

  read(index) {
    if (index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }

  push(val) {
    this.resize()
    this.data[this.length] = val;
    this.length++
  }


  pop() {
    let popped = this.data.splice(this.length - 1, 1);
    this.length--
    return popped[0]
  }

  shift() {
    let shifted = this.data.splice(0, 1);
    this.length--;
    return shifted[0];
  }

  unshift(val) {
    this.resize();
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val;
    this.length++
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (val === this.data[i]) {
        return i
      }
    }
    return -1
  }

  resize() {
    if (this.length === this.capacity) {
      this.capacity *= 2;
    }
  }

}


module.exports = DynamicArray;
