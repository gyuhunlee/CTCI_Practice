// Given two singly L.L, determine if two lists intersect. Return the intersecting node.
// Must be the exact same node (by reference) to be considered intersecting

// Ex.       2 - 7
//                \
//                 4 - 2        ===> intersecting at 4
//                /
//       5 - 6 - 3

function findIntersection(headOne, headTwo) {
  // create a new pointer at head1 and head2
  var newHeadOnePointer = headOne, newHeadTwoPointer = headTwo;
  // create head1Counter, head2Counter
  var headOneCounter = 0, headTwoCounter = 0;

  // loop through head1
  while (newHeadOnePointer) {
    // increment each time
    headOneCounter++;
    newHeadOnePointer = newHeadOnePointer.next;
  }

  // loop through head2
  while (newHeadTwoPointer) {
    // increment each time
    headTwoCounter++;
    newHeadTwoPointer = newHeadTwoPointer.next;
  }

  // move the longer LL (head1Counter - head2Counter) times
  var longer = headOneCounter > headTwoCounter ? headOne : headTwo;
  var shorter = headOneCounter > headTwoCounter ? headTwo : headOne;

  for (let i = 0; i < Math.abs(headOneCounter - headTwoCounter); i++) {
    longer = longer.next;
  }

  // while head1 is not equal to head2
  while (longer !== shorter) {
    // keep incrementing
    longer = longer.next;
    shorter = shorter.next;
  }

  // return null if no intersection
  return longer !== null ? longer : null;
}


var Node = function(value) {
  return { value: value, next: null };
};

// Test 1
var nodeB = Node(2);
var nodeC = nodeB.next = Node(7);
var nodeD = nodeC.next = Node(4);
var nodeE = nodeD.next = Node(2);

var nodeAA = Node(5);
nodeAA.next = Node(6);
nodeAA.next.next = Node(3);
nodeAA.next.next.next = nodeD;

console.dir(findIntersection(nodeB, nodeAA), {depth: null});

// Test 2
var nodeB = Node(2);
var nodeC = nodeB.next = Node(7);
var nodeD = nodeC.next = Node(4);
var nodeE = nodeD.next = Node(2);

var nodeAA = Node(5);
nodeAA.next = Node(6);
nodeAA.next.next = Node(3);
nodeAA.next.next.next = Node(11);

console.dir(findIntersection(nodeB, nodeAA), {depth: null});