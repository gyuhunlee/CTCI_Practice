// Design a stack which has push, pop, and min function all operate in O(1) time

var Stack = function() {
  this.container = [];
  this.minimum = [];
  this.size = 0;
}

Stack.prototype.push = function(val) {
  this.container.push(val);
  this.size++;

  // if min array is empty
  if (!this.minimum.length) {
    // add the val
    this.minimum.push(val);
  }

  if (this.minimum[this.minimum.length - 1] > val) {
    this.minimum.push(val);
  }
}

Stack.prototype.pop = function() {
  var poppedValue = this.container.pop();
  this.size--;

  // check if the popped value is minimum value
  if (poppedValue === this.minimum[this.minimum.length - 1]) {
    // pop if true
    this.minimum.pop();
  }

  return poppedValue;
}

Stack.prototype.min = function() {
  // return value if min array is not empty
  return this.minimum.length > 0 ? this.minimum[this.minimum.length - 1] : null;
}

var newStack = new Stack();
newStack.push(3);
newStack.push(-5);
newStack.push(-2);
newStack.push(7);
newStack.push(-11);
newStack.push(2);
console.log(newStack.pop());  // 2
console.log(newStack.min());  // -11
console.log(newStack.pop());  // -11
console.log(newStack.min());  // -5
console.log(newStack);        // { container: [ 3, -5, -2, 7 ], minimum: [ 3, -5 ], size: 4 }

