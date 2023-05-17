class SortedList {
  constructor (items, length) {
    this.items = [];
    this.length = 0;
  };

  add(item) {
    this.items.push(item);
    this.length++;
    return this.items.sort((a, b) => a - b);
  };

  get(pos) {
    this.items.indexOf(pos);
    this.length++;
    if (pos >= this.items.length){
      throw new Error ("OutOfBounds");
    }
    else {
    return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error ("EmptySortedList")
    }
    else {
    return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0){
      throw new Error ("EmptyStoredList")
    }
    else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.length === 0){
      throw new Error ("EmptyStoredList");
    }
    else {
    return this.sum () / this.length;
    }
  };
}

module.exports = SortedList;
