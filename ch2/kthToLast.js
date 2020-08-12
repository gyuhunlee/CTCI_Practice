// Implement an algorithm to find the kth to last element of a singly linked list

// Ex.  3 - 5 - 10 - 1 - 6 - 4 - 7,  2   =>   4
//      3 - 9 - 10 - 5 - 6 - 1 - 1,  3   =>   6

// Time O(n), Space O(1)
function kthToLast(head, k) {
  // if head is empty
  if (!head.value) {
    // return null
    return null;
  }

  // create two pointers to head
  var slowPointer = head;
  var fastPointer = head;

  // have one pointer move kth amount forward
  for (let i = 0; i < k; i++) {
    fastPointer = fastPointer.next;
  }

  // iterate through the faster pointer while it is not null
  while (fastPointer) {
    // move slower pointer by 1
    fastPointer = fastPointer.next;
    // move faster pointer by 1
    slowPointer = slowPointer.next;
  }

  // return slower pointer
  return slowPointer;
}

var Node = function(value) {
  return { value: value, next: null };
};

// Test 1
var nodeA = Node(3);
var nodeB = nodeA.next = Node(5);
var nodeC = nodeB.next = Node(10);
var nodeD = nodeC.next = Node(1);
var nodeE = nodeD.next = Node(6);
var nodeF = nodeE.next = Node(4);
var nodeG = nodeF.next = Node(7);

console.dir(kthToLast(nodeA, 2), {depth: null});  // returns 4

// Test 2
var nodeA = Node(3);
var nodeB = nodeA.next = Node(9);
var nodeC = nodeB.next = Node(10);
var nodeD = nodeC.next = Node(1);
var nodeE = nodeD.next = Node(6);
var nodeF = nodeE.next = Node(4);
var nodeG = nodeF.next = Node(7);

console.dir(kthToLast(nodeA, 4), {depth: null});  // returns 1

// Test 3
var nodeA = Node();
console.dir(kthToLast(nodeA, 2));