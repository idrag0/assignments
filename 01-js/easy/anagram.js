/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2){
  let sizeStr1 = str1.length;
  let sizeStr2 = str2.length;

  if(sizeStr1 !== sizeStr2){
    return false;
  }

  let arr1 = str1.toLowerCase();
  let arr2 = str2.toLowerCase();
  
  let char1 = arr1.split('');
  let char2 = arr2.split('');
  
  char1.sort();
  char2.sort();
  

  for(let i = 0; i < sizeStr1; i++){
    if(char1[i] !== char2[i]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
