// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, string aabcccccaaa would become a2b1c5a3.
// If the compressed string is not smaller than the original string, return the original string.
// Assume string has only upper and lowercase letters (a - z)

function stringCompression(str) {
  // create an answer variable
  // create a count variable
  var answer = "", count = 1;

  // for loop through the input str
  for (let i = 0; i < str.length; i++) {
    // if count is equal to 1
    if (count === 1) {
      // concatenate the i element to answer variable
      answer = answer.concat(str[i]);
    }

    // check if the i element is equal to i + 1 element
    if (str[i] === str[i+1]) {
      // increment the count
      count++;
      // else
    } else {
      // concatenate the count to answer variable
      answer = answer.concat(count);
      // reassign count to equal 1
      count = 1;
    }
  }

  // return the answer variable IF the length is less than the original string
  return str.length === answer.length ? str : answer;
};

console.log(stringCompression('acccbbzzzt')) // acccbbzzzt    NOT a1c3b2z3t1
console.log(stringCompression('aaattttBBBsB')) // a3t4B3s1B1
