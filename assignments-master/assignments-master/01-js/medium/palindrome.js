/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(ostr) {

  // making case small
  ostr=ostr.split(' ').join('').toLowerCase();

  //removing non alaphabets from ostr 
  let str="";
  for(let char of ostr)
  {
    if((char>='a' && char<='z') || (char>='A' && char<='Z'))str+=char;
  }
   
 
  console.log(str);
  // check palindrome
  let i=0 , j=str.length-1;
  while(i<=j)
  {
    if(str[i].toLowerCase()!=str[j].toLowerCase())return false;
    else {
      i++;
      j--;
    }
  }
  return true;
}

module.exports = isPalindrome;
