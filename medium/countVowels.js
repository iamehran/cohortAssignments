/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    //Your code here
    let newString = str.toLowerCase();
    let count = 0;
    for(let i=0;i<=newString.length;i++){
      if(newString[i]=='a'|| newString[i]=='e'|| newString[i]=='i' || newString[i]=='o'|| newString[i]=='u'){
        count++;
      }
    }
    // const count = str.match(/[aeiou]/gi).length;
    return count;
}

module.exports = countVowels;