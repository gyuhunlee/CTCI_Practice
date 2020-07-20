// Given two strings, write a method to decide if one is a permutation of the other

// I : two strings (with identical length)
// O : boolean
// C : N/A
// E : Capital letters, any spaces in the input string(s)

// Approach 1 (Time : O(n log n), Space : O(1))  - Sorting two strings
// Approach 2 (Time : O(n), Space : O(n))        - Using object to store first string then compare second string


function permutation(str1, str2) {
  // immediately return false if length is different
  if (str1.length !== str2.length) {
    return false;
  }

  var storage = {};

  // store each element of str1 into storage
  for (let i = 0; i < str1.length; i++) {
    storage[str1[i]] = storage[str1[i]] ? storage[str1[i]]++ : 1;
  }

  // compare each element of str2 with str1 element in storage
  for (let i = 0; i < str2.length; i++) {
    storage[str2[i]] = storage[str2[i]] ? storage[str2[i]]-- : -1;
    if (storage[str2[i]] < 0) {
      return false;
    }
  }

  return true;
}


// console.log(permutation('abc', 'cba'));
// console.log(permutation('aafreds', 'ggga'));
// console.log(permutation('asdfg', 'gfsdh'));
// console.log(permutation('Abc', 'Cba'));
// console.log(permutation('Abc f', 'Cb af'));