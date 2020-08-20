// Implement a real world example of stack of plates, once the previous one exceeds capacity, start a new stack.
// push() and pop() should behave identically to a single stack.


var Stack = function(limit) {
  this.stackOfPlates = [];
  this.oneStack = [];
  this.plateLimit = limit;
}

Stack.prototype.push = function(val) {
  if (this.oneStack.length === this.plateLimit) {
    this.stackOfPlates.push(this.oneStack);
    this.oneStack = [];
  }

  this.oneStack.push(val);
}

Stack.prototype.pop = function() {
  if (!this.oneStack.length && this.stackOfPlates.length) {
    this.oneStack = this.stackOfPlates.pop();
  } else if (!this.oneStack.length && !this.stackOfPlates.length) {
    return null;
  }

  return this.oneStack.pop();
}

var test = new Stack(3);
// test.push(3);
// test.push(1);
// test.push(7);
// console.log(test);
// test.push(7);
// console.log(test);

// console.log(test.pop())
// console.log(test);
// console.log(test.pop())
// console.log(test);
// console.log(test.pop())
// console.log(test);
// console.log(test.pop())
// console.log(test);
// console.log(test.pop())
// console.log(test);