// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a reaarangement of letters.
// The palindrome does not need to be limited to just dictionary words.

// Ex.
// Input: "Tact Coa"
// Output: True  (permutations: "taco cat", "atco cta", etc.)

function palindromePermutation(permutation) {
  // create an object called storage
  var storage = {};

  // set permutation to be lower case
  permutation = permutation.toLowerCase();

  // for loop through the permutation
  for (let i = 0; i < permutation.length; i++) {
    // if the element is space (' ')
    if (permutation[i] === ' ') {
      // continue
      continue;
    }
    // store it into the storage
    storage[permutation[i]] = storage[permutation[i]] === undefined ? 1 : ++storage[permutation[i]];
  }

  // create a variable to keep track of how many letter with 1 are in storage
  var palindromeChecker = 0;

  // for loop through the storage
  for (let letter in storage) {
    // if the value is odd
    if (storage[letter] % 2 !== 0) {
      // increment the variable
      palindromeChecker++;
    }
  }

  // check if palindromeChecker is greater than 1
  return palindromeChecker <= 1;
}

console.log(palindromePermutation('Tact Coa'));
console.log(palindromePermutation('SOS'));
console.log(palindromePermutation('fast track'));
console.log(palindromePermutation('coconut cake'));