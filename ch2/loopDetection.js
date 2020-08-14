// Given a circular L.L, implement an algorithm that returns the node at the beginning of the loop

// Ex. A - B - C - D
//             |   |      =>    returns C
//             F - E

function loopDetection(head) {
  // create two pointers, one slow and one fast
  var slow = head;
  var fast = head;
  // while loop through until both slow and fast meet
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      break;
    }
  }

  if (!fast || !fast.next) {
    return null;
  }

  // move the slow pointer back to head
  slow = head;
  // loop through until both slow and fast meet
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  // return fast if not null
  return fast;
};

var Node = function(value) {
  return { value: value, next: null };
};

// Test 1
var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
var nodeF = nodeE.next = Node('F');
nodeF.next = nodeC;
console.dir(loopDetection(nodeA), {depth: null});


// Test 2
var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
var nodeF = nodeE.next = Node('F');
console.dir(loopDetection(nodeA), {depth: null});