// Implement an alg to delete a node in the moddle of a singly linked list, given only access to that node

// Ex. a - b - c - d - e - f    => a - b - d - e - f   ** Don't need to return anything

// * Delete the node at Math.floor(node length / 2)


function deleteMiddleNode(head) {
  // check if head and head.next is present
  if (!head || !head.next) {
    // return null
    return null;
  }

  // create a pointer to head.next
  var nxt = head.next;
  // replace head value with head.next
  head.value = nxt.value;
  // replace head.next with head.next.next
  head.next = nxt.next;

  return head;
}

var Node = function(value) {
  return { value: value, next: null };
};

// Test 1
var nodeA = Node(3);
var nodeB = nodeA.next = Node(5);
var nodeC = nodeB.next = Node(10);
var nodeD = nodeC.next = Node(10);
var nodeE = nodeD.next = Node(5);
var nodeF = nodeE.next = Node(3);

console.dir(deleteMiddleNode(nodeC), {depth: null});

// Test 2
var nodeA = Node(2);
var nodeB = nodeA.next = Node(7);
var nodeC = nodeB.next = Node(1);
var nodeD = nodeC.next = Node(7);
var nodeE = nodeD.next = Node(2);

console.dir(deleteMiddleNode(nodeC), {depth: null});

// Test 3
var nodeA = Node(2);
var nodeB = nodeA.next = Node(7);

console.dir(deleteMiddleNode(nodeB), {depth: null});