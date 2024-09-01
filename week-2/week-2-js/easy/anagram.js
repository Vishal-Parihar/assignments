/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
// const arr1 = str1.toLowerCase().split("");  //vis = ['v','i','s']  converts to array
// arr1.sort(); //['i','s','v']
// const sorted1 = arr1.join("");     //isv

// const arr2 = str2.toLowerCase().split("");
// arr2.sort();
// let sorted2 = arr2.join("");


const sorted1 = str1.toLowerCase().split("").sort().join("");
const sorted2 = str2.toLowerCase().split("").sort().join("");

if(sorted1 ==sorted2) return true;
else return false;
}

module.exports = isAnagram;
