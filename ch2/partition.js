// Write code to partition a LL around a value x, such that all nodes less than x comes before all nodes greater than or equal to x.

// Ex.   3 - 5 - 8 - 5 - 10 - 2 - 1  partion = 5  => 3 - 1 - 2 - 10 - 5 - 5 - 8

function partition(head, target) {
  // left = keeps track of nodes that are less than target
  var left = null;
  // right = keeps track of nodes that are greater than/equal to target
  var right = null;
  // connector = keeps track of starting position for right
  var connector = null;
  // curr = iterate through LL
  var curr = head;

  // iterate through head while it is not null
  while (curr) {
    // set the value for left and right if they are null
    if (!left || !right) {
      if (curr.value >= target) {
        // set the connector to start of right
        right = curr;
        connector = right;
      } else {
        left = curr;
      }
      curr = curr.next;
      continue;
    }

    // if curr.value is equal to/greater than target
    if (curr.value >= target) {
      // set right.next to be curr
      right.next = curr;
      // move right
      right = right.next;
      // else if curr.value is less than target
    } else {
      // set left.next to be curr
      left.next = curr;
      // move left to curr
      left = left.next;
    }
    curr = curr.next;
  }

  // set right.next to null
  right.next = null;
  // connect left with connector
  left.next = connector;

  return head;
}

var Node = function(value) {
  return { value: value, next: null };
};

var nodeA = Node(3);
var nodeB = nodeA.next = Node(5);
var nodeC = nodeB.next = Node(8);
var nodeD = nodeC.next = Node(5);
var nodeE = nodeD.next = Node(10);
var nodeF = nodeE.next = Node(2);
var nodeG = nodeF.next = Node(1);

console.dir(partition(nodeA, 5), {depth: null});

var nodeA = Node(5);
var nodeB = nodeA.next = Node(6);
var nodeC = nodeB.next = Node(6);
var nodeD = nodeC.next = Node(6);
var nodeE = nodeD.next = Node(1);
var nodeF = nodeE.next = Node(9);
var nodeG = nodeF.next = Node(-3);

console.dir(partition(nodeA, 6), {depth: null});