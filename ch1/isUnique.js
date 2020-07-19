// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// I : string
// O : boolean
// C : O(1) space complexity
// E : "",

// Time : O(n), Space : O(n)
function isUnique(str) {
  // create a hash tabel(object)
  var storage = {};
  // for loop thru the string
  for (let i = 0; i < str.length; i++) {
    // if current element found in object
    if (storage[str[i]]) {
      // return false
      return false;
    } else {
      // else store into object
      storage[str[i]] = 'insert';
    }
  }

  // return true if no duplicate
  return true;
}

// console.log(isUnique('btalsap'));
// console.log(isUnique('abcd'));
// console.log(isUnique(''));


// Other approach :
// To have space complexity of O(1), we can sort the input string and then compare i + 1 element with i element
// Time : O(n log n), Space : O(1)