class IntSet {
  constructor(hashFunction) {
    this._hashFunction = hashFunction || JSON.stringify;
    this._set = [];
    this._size = 0;
  }
  add(value) {
    if (!this.contains(value)) {
      this._set[this._hashFunction(value)] = value;
      this._size++;
    }
  }
  contains(value) {
    return typeof this._set[this._hashFunction(value)] !== "undefined";
  }
  remove(value) {
    if (this.contains(value)) {
      delete this._values[this._hashFunction(value)];
      this._size--;
    }
  }
  isMember(ele) {
    for (let i = 0; i < this.set.length; i++) {
      if (ele === this.set[i]) {
        return true;
      } else return false;
    }
  }
  size() {
    return this._size;
  }
  isSubSet(set) {
    for (let i = 0; i < _size; i++) {
      let j = 0;
      for (; j < this.set.length; j++) {
        if (set[i] == this.set[j]) {
          break;
        }
      }
      if (j == this.set.length) {
        return false;
      }
    }
    return true;
  }
  getComplement() {
    let complement = [];
    let j = 0;
    let copySet = this._set.filter(ele => ele);
    copySet.sort();
    for (let i = 1; i <= 1000; i++) {
      if (copySet[j] == i) {
        j++;
        continue;
      }
      complement.push(i);
    }
    return complement;
  }
  union(setA, setB) {
    let union = new IntSet(setA);
    for (let i = 0; i < setB.size(); i++) {
      if (!union.contains(setB[i])) {
        union.add(setB[i]);
      }
    }
    return union;
  }
}
