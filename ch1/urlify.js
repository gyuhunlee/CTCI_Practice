// Write a method to replace all spaces in string with '%20'. You may assume that the string has sufficient space at the end to hold
// the additional characters. You are given the 'true' length of the string.

// Ex. 'Mr John Smith     ', 13
// Output 'Mr%20John%20Smith'

function urlify(str, trueLength) {
  // create an empty string variable (answer)
  var answer = "";

  // iterate through the str
  for (let i = 0; i < str.length; i++) {
    // if the current element equals to space (" ")
    if (str[i] === " ") {
      // add %20 to the answer variable
      answer = answer.concat("%20");
    } else {
      // else simply add the current element to the answer variable
      answer = answer.concat(str[i]);
    }

    // decrement length by one per iteration
    trueLength--;
    // if length equals 0, break out of for loop
    if (!trueLength) {
      break;
    }
  }

  // return the variable
  return answer;
}

console.log(urlify("Double Double", 13));
console.log(urlify("San Francisco is near  ", 21));
console.log(urlify("  How are you ?", 15));
