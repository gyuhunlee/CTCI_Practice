// Write code to remove duplicates from an unsorted linked list

// Ex. 5 -> 3 -> 10 -> 6 -> 3 -> 2

// Time = O(n), Space = O(n)

function removeDups(head) {
  // create an obj variable to store previously visited values
  var previouslySeenValue = {};
  // create a variable that points at the head
  var curr = head;
  var prev = null;

  // iterate through the copied pointer
  while (curr) {
    // if the current value is in the object
    if (previouslySeenValue[curr.value]) {
      // set the new current to be curr.next
      curr = curr.next;
      // prev.next = curr
      prev.next = curr;
      // else
    } else {
      // store the curr value to object
      previouslySeenValue[curr.value] = 'seen';
      // set new curr and prev
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
}


var Node = function(value) {
  return { value: value, next: null };
};

var nodeA = Node(5);
var nodeB = nodeA.next = Node(3);
var nodeC = nodeB.next = Node(10);
var nodeD = nodeC.next = Node(3);
var nodeE = nodeD.next = Node(6);
var nodeF = nodeE.next = Node(3);
var nodeG = nodeF.next = Node(2);
// console.dir(removeDups(nodeA), {depth: null}); // 5 - 3 - 10 - 6 - 2

var nodeA = Node(3);
var nodeB = nodeA.next = Node(3);
var nodeC = nodeB.next = Node(10);
var nodeD = nodeC.next = Node(3);
var nodeE = nodeD.next = Node(6);
var nodeF = nodeE.next = Node(7);
var nodeG = nodeF.next = Node(1);
// console.dir(removeDups(nodeA), {depth: null}); // 3 - 10 - 6 - 7 - 1

