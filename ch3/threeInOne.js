// Describe how you could use a single array to implement three stacks

var Stack = function() {
  this.container = [];
  this.index2 = 0;
  this.index3 = 0;
}

Stack.prototype.push1 = function(val) {
  this.container.unshift(val);
  this.index2++;
  this.index3++;
}

Stack.prototype.push2 = function(val) {
  this.container.splice(this.index3, 0, val)
  this.index3++;
}

Stack.prototype.push3 = function(val) {
  this.container.push(val);
}

Stack.prototype.pop1 = function() {
  if (this.isEmpty1()) {
    return null;
  }

  var poppedValue = this.container.shift();
  if (this.index2 > 0) {
    this.index2--;
    this.index3--;
  }

  return poppedValue;
}

Stack.prototype.pop2 = function() {
  if (this.isEmpty2()) {
    return null;
  }

  var poppedValue = this.container[this.index3 - 1];
  this.container.splice(this.index3 - 1, 1);
  if (this.index3 > this.index2) {
    this.index3--;
  }
  return poppedValue;
}

Stack.prototype.pop3 = function() {
  if (this.isEmpty3()) {
    return null;
  }
  return this.container.pop();
}

Stack.prototype.isEmpty1 = function() {
  return this.container.length === 0;
}

Stack.prototype.isEmpty2 = function() {
  return this.index2 === this.index3;
}

Stack.prototype.isEmpty3 = function() {
  return this.index3 === this.container.length;
}


var newStack = new Stack();
newStack.push1(3);
newStack.push1(5);
newStack.push1(1);

newStack.push2(7);
newStack.push2(1);
newStack.push2(1);

newStack.push3(8);
newStack.push3(9);
newStack.push3(4);
console.log(newStack.pop1());
console.log(newStack.pop2());
console.log(newStack.pop3());
console.log(newStack.pop3());
console.log(newStack.pop3());
console.log(newStack.pop3());