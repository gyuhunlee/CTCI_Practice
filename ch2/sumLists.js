



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