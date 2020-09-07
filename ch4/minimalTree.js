// Given a sorted (increasing) array with unique integer elements, create a binary search tree with minimal height

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function minimalTree(arr) {
  // create a variable tree
  return makeTree(0, arr.length - 1);

  // function to do recursion
  function makeTree(leftSide, rightSide) {
    if (rightSide < leftSide) {
      return null;
    }

    var mid = Math.floor((leftSide + rightSide) / 2);
    var root = new Node(arr[mid]);

    root.left = makeTree(leftSide, mid - 1);
    root.right = makeTree(mid + 1, rightSide);

    return root;
  }
}



console.log(minimalTree([1,3,7,10,11,50,55]));
console.dir(minimalTree([1,3,7,10,11,14,50,55]), {depth: null});