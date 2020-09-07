// Implement a function to check if a binary tree is a binary search tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBST(root) {
  var prevNode = null;
  function traverseTree(node) {
    if (!node) {
      return true;
    }

    if (!traverseTree(node.left)) {
      return false;
    }

    if (prevNode !== null && node.value <= prevNode) {
      return false;
    }

    prevNode = node.value;

    if (!traverseTree(node.right)) {
      return false;
    }

    return true;
  }

  return traverseTree(root);
}

var tree = new Node(8);
tree.left = new Node(4);
tree.right = new Node(13);
tree.left.left = new Node(1);
tree.left.right = new Node(9);
tree.right.left = new Node(11);
tree.right.right = new Node(15);
console.log(validateBST(tree));