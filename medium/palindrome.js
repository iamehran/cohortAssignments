/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newString = str.split(' ').join('').replace(/[.,?!@#$%^&*(){}]/g,"").toLowerCase();
  let reverse = newString.split('').reverse().join('');
  if(newString===reverse){
  return true;
}
return false;
}

module.exports = isPalindrome;
