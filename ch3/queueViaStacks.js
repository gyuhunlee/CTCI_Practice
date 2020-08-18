// Implement a MyQueue class which implements a queue using two stacks

class MyQueue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
    this.size = 0;
  }

  add(value) {
    this.stackA.push(value);
    this.size++;
  }

  remove() {
    // check if stackB is empty
    if (!this.stackB.length) {
      // check if stackA is empty
      if (!this.stackA.length) {
        // return null
        return null;
      // else
      } else {
        // loop through stackA to restock stackB
        for (let i = 0; i < this.size; i++) {
          this.stackB.push(this.stackA.pop());
        }
      }
    }
    this.size--;
    // return popped
    return this.stackB.pop();
  }

  peek() {
    // check the last element of stackB
    var nextInLine = this.stackB[this.stackB.length - 1];
    if (nextInLine !== undefined) {
      // return last element
      return nextInLine;
    // check the first element of stackA
    } else if (this.stackA[0] !== undefined) {
      // return first element
      return this.stackA[0];
    } else {
      // return null
      return null;
    }

  }

  imEmpty() {
    // check if this.size is 0
    return !this.size ? false : true;
  }
}

var test = new MyQueue();
test.add(4);
test.add(1);
test.add(111);
test.add(43);
console.log(test);
console.log(test.peek());
console.log(test.remove());
console.log(test.remove());
console.log(test.remove());
console.log(test.remove());
console.log(test.remove());
console.log(test);