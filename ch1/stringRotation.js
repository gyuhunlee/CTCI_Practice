// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given s1, s2, write code to check if s2 is a rotation of s1

// Ex. "waterbottle" is a rotation of "erbottlewat"

function isSubstring(str1, str2) {
  // return false if str1 length is not equal to str2
  if (str1.length !== str2.length) {
    return false;
  }

  var arrayStr2 = str2.split('');

  // loop through str2 for the length of str2
  for (let i = 0; i < str2.length; i++) {
    // if str1 is equal to str2
    if (str1 === str2) {
      // return true
      return true;
    } else {
      // otherwise get the first letter from str2 and push it to the end
      var rotate = arrayStr2.shift();
      arrayStr2.push(rotate);
      // reassign str2
      str2 = arrayStr2.join('');
    }
  }

  // return false
  return false;
}

// console.log(isSubstring("waterbottle", "erbottlewat"));
// console.log(isSubstring("ete", "tee"));
// console.log(isSubstring("acac", "caca"));
// console.log(isSubstring("cactus", "totoros"));



function isSubstring2(str1, str2) {
  // return false if str1 length is not equal to str2
  if (str1.length !== str2.length) {
    return false;
  }

  return (str2 + str2).includes(str1);
}

// console.log(isSubstring2("waterbottle", "erbottlewat"));
// console.log(isSubstring2("ete", "tee"));
// console.log(isSubstring2("acac", "caca"));
// console.log(isSubstring2("cactus", "totoros"));