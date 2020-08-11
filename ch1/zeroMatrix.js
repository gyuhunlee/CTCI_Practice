// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

function zeroMatrix(matrix) {
  // create an object to keep track of any 0s for column
  var columnTracker = {};

  // for loop through rows
  for (let i = 0; i < matrix.length; i++) {
    // create a boolean variable that keeps track of which row has 0
    var rowTracker = false;
    // for loop through columns
    for (let j = 0; j < matrix[i].length; j++) {
      // check if an element within [row][col] is 0
      if (matrix[i][j] === 0) {
        // set the boolean variable to true
        rowTracker = true;
        // store the column index to object
        columnTracker[j] = true;
      }
    }

    // if the boolean variable is true
    if (rowTracker) {
      // assign the current row to array filled with 0s
      // matrix[i] = new Array(matrix[i].length+1).join('0').split('').map(parseFloat);
      matrix[i] = new Array(matrix[i].length).fill(0);
    }
  }

  columnTracker = Object.keys(columnTracker);
  // iterate through object's keys
  for (let i = 0; i < columnTracker.length; i++) {
    // make each element in that column 0
    var col = Number(columnTracker[i]);
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0;
    }
  }

  // return matrix
  return matrix
}

console.log(zeroMatrix([[1,2,3],[3,0,1],[2,2,7]]));
console.log(zeroMatrix([[1,2,3,5],[0,3,0,1],[2,2,7,3]]));
