// There are three types of edits that can be performed on strings: insert, remove, replace a character. Given two strings, write a function to check if they are one eidt (or zero edits) away

// Ex.
// pale, ple -> true
// pale, bake -> false

function oneAway(str1, str2) {
  // check if difference between input1 and input2 is greater than 1
  if (Math.abs(str1.length - str2.length) > 1) {
    // immediately return false
    return false;
  }

  // create a variable that stores the length of longer string
  var longerStringLength = str1.length >= str2.length ? str1.length : str2.length;

  // create couple variables for index1, index2, and total count of differences of letters
  var i = 0, j = 0, difference = 0;

  // while loop through the variable
  while (i < longerStringLength.length) {
    // if current element of input1 does not equal current element of input2
    if (str1[i] !== str2[j]) {
      // increment the difference
      difference++;
      // increment the index with longer variable
      i++;
    // else
    } else {
      // increment both indices
      i++;
      j++;
    }
  }

  // return the difference variable <= 1
  return difference <= 1;
}

console.log(oneAway('pale', 'ale'));
console.log(oneAway('apple', 'pineapple'));
console.log(oneAway('apple', 'apples'));
console.log(oneAway('beer', 'bear'));