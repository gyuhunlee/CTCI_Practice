// Given an img of NxN matrix, where each pixel in image is 4 bytes, write a method to rotate
// the image by 90 degrees. Can you do this in place?

// Ex. [ [1, 2, 3]         [ [7, 4, 1]
//       [4, 5, 6]    =>     [8, 5, 2]
//       [7, 8, 9] ]         [9, 6, 3] ]

function rotateMatrix(matrix) {
  // create a variable to keep track of how many rotations need to happen
  var numberOfLayersToRotate = Math.floor(matrix.length / 2);

  // for loop through ^ variable
  for (let i = 0; i < numberOfLayersToRotate; i++) {
    // create a starting layer
    var start = i;
    // create a ending layer
    var end = matrix.length - start - 1;
    // for loop through ending - starting layer
    for (let j = start; j < end; j++) {
      // create a variable to keep track of rotating index
      var rotatingIndex = j - start;
      // create a temp variable to store top
      var temp = matrix[start][j];
      // top equals left
      matrix[start][j] = matrix[end - rotatingIndex][start];
      // left equals bot
      matrix[end - rotatingIndex][start] = matrix[end][end - rotatingIndex];
      // bot equals right
      matrix[end][end - rotatingIndex] = matrix[j][end]
      // right equals temp
      matrix[j][end] = temp;
    }
  }



  // return the matrix
  return matrix;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]])); // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
console.log('---------------');
console.log(rotateMatrix([[1,  2,  3,  4],
                          [5,  6,  7,  8],
                          [9, 10, 11, 12],
                          [13,14, 15, 16]]));    //[ [ 13, 9, 5, 1 ], [ 14, 10, 6, 2 ], [ 15, 11, 7, 3 ], [ 16, 12, 8, 4 ] ]
console.log('---------------');
console.log(rotateMatrix([[1,   2,  3,  4,  5],
                          [6,   7,  8,  9, 10],
                          [11, 12, 13, 14, 15],
                          [16, 17, 18, 19, 20],
                          [21, 22, 23, 24, 25]]));
                          // [ [ 21, 16, 11, 6, 1 ], [ 22, 17, 12, 7, 2 ], [ 23, 18, 13, 8, 3 ], [ 24, 19, 14, 9, 4 ], [ 25, 20, 15, 10, 5 ] ]