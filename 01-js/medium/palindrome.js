/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function valid(ch){
  if(ch>='a' && ch<='z' || ch>='A' && ch<='Z' || ch<=9 && ch>=1){
    return true;
  }
  return false;
}


function palindrom(newStr){
  let start=0;
  let end=newStr.length-1;

  while(start<=end){
    if(newStr[start]!==newStr[end]){
      return false;
    }
    else{
      start++;
      end--;
    }
  }
  return true;
}

//given function
function isPalindrome(str) {
  //remove faltu characters
  let newStr="";

  for(let i=0;i<str.length;i++){
    if(valid(str[i])){
      newStr += str[i];
    }
  }

  let ch1=newStr.toLowerCase();


  return palindrom(ch1);
}

module.exports = isPalindrome;
