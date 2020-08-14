// Given two singly L.L which represents two numbers, write a function that adds the two numbers and returns the sum as a linked list

// Ex. 1 - 2 - 3
//     5 - 6 - 7      =>    6 - 9 - 0

function sumList(num1, num2) {
  // create two arrays to store num1 and num2 values
  // function that iterates through LL and returns an array of numbers
  var arr1 = linkedListToNumber(num1), arr2 = linkedListToNumber(num2);

  // create a variable for extraOne
  // create a variable for sum
  var extraOne = 0, sum = Node();

  // while loop that goes on as long as longer array is not empty
  while (arr1.length || arr2.length) {
    // get the last element from shorter array
    var arr1Digit = arr1.pop() || 0;
    // get the last element from longer array
    var arr2Digit = arr2.pop() || 0;

    // store the sum of arr1 + arr2 + extraOne
    var added = arr1Digit + arr2Digit + extraOne;
    sum.value = added % 10;

    // figure out if the sum is greather than or equal to 10 and update extraOne accordingly
    extraOne = added >= 10 ? 1 : 0;

    // create a new node and make new node.next equal sum
    var nextDigit = Node();
    nextDigit.next = sum;
    sum = nextDigit;
  }

  if (extraOne) {
    sum.value = extraOne;
    return sum;
  } else {
    return sum.next;
  }
}

function linkedListToNumber(list) {
  var number = [];
  while (list) {
    number.push(list.value);
    list = list.next;
  }
  return number;
}

var Node = function(value) {
  return { value: value, next: null };
};

// Test 1
var nodeA = Node(1);
var nodeB = nodeA.next = Node(2);
var nodeC = nodeB.next = Node(3);

var nodeAA = Node(5);
var nodeBB = nodeAA.next = Node(5);
var nodeCC = nodeBB.next = Node(5);
var nodeDD = nodeCC.next = Node(7);
console.dir(sumList(nodeA, nodeAA), {depth: null}); // 6 8 0

// Test 2
var nodeA = Node(9);
var nodeB = nodeA.next = Node(9);
var nodeC = nodeB.next = Node(9);

var nodeAA = Node(9);
var nodeBB = nodeAA.next = Node(0);
var nodeCC = nodeBB.next = Node(0);
var nodeDD = nodeCC.next = Node(1);

console.dir(sumList(nodeA, nodeAA), {depth: null}); // 1 0 0 0 0

