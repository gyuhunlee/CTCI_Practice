// Sort a stack such that smallest itmes are on the top. Do not copy the elements into any other data structure.
// temporary stack is allowed. This must support push(), pop(), peek(), and isEmpty()

var SortedStack = function() {
  this.stack = [];
  this.size = 0;
}

SortedStack.prototype.push = function(value) {
  var tempArray = [];
  this.size++;

  // move item that is less than value to temp
  while (this.stack[this.stack.length - 1] < value) {
    tempArray.push(this.stack.pop());
  }
  // found the right spot for the value so insert to this.stack
  this.stack.push(value);

  // loop through tempArray to restock this.stack if needed
  while (tempArray.length) {
    this.stack.push(tempArray.pop());
  }
}

SortedStack.prototype.pop = function() {
  if (this.size > 0) {
    var poppedVal = this.stack.pop();
    this.size--;
    return poppedVal;
  }
  return null;
}

SortedStack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
}

SortedStack.prototype.isEmpty = function() {
  return !this.size ? true : false;
}


var test = new SortedStack();
console.log(test.isEmpty())
test.push(5);
test.push(11);
test.push(2);
test.push(7);
test.push(6);
test.push(1);
test.push(18);
console.log(test) // [18, 11, 7, 6, 5, 2, 1]
console.log(test.peek());
test.pop();
test.pop();
console.log(test.peek());
console.log(test)  // [18, 11, 7, 6, 5]