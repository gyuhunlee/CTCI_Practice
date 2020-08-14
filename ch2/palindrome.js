// Implement a function to check if a L.L is a palindrome

// Ex. a - b - c - c - b - a   true
//     a - b - c - b - a       true
//     a - c - s - s - t       false

function palindrome(head) {
  var valueTracker = [];
  // loop through the LL and store each value
  while (head) {
    valueTracker.push(head.value);
    head = head.next;
  }

  // find the middle index
  var middle = Math.floor(valueTracker.length / 2);
  var left, right;

  // figure out if length is odd or even
  if (valueTracker.length % 2) {
    left = middle - 1;
    right = middle + 1;
  } else {
    left = middle - 1;
    right = middle;
  }

  // loop through valueTracker
  while (right < valueTracker.length) {
    if (valueTracker[left--] !== valueTracker[right++]) {
      return false;
    }
  }

  return true;
}


var Node = function(value) {
  return { value: value, next: null };
};


// Test 1
var nodeA = Node(3);
var nodeB = nodeA.next = Node(5);
var nodeC = nodeB.next = Node(8);
var nodeD = nodeC.next = Node(8);
var nodeE = nodeD.next = Node(5);
var nodeF = nodeE.next = Node(3);
console.dir(palindrome(nodeA));

// Test 2
var nodeA = Node(5);
var nodeB = nodeA.next = Node(3);
var nodeC = nodeB.next = Node(3);
var nodeD = nodeC.next = Node(3);
var nodeE = nodeD.next = Node(5);
console.dir(palindrome(nodeA));

// Test 3
var nodeA = Node(5);
var nodeB = nodeA.next = Node(6);
var nodeC = nodeB.next = Node(6);
var nodeD = nodeC.next = Node(6);
var nodeE = nodeD.next = Node(1);
var nodeF = nodeE.next = Node(9);
var nodeG = nodeF.next = Node(-3);
console.dir(palindrome(nodeA));