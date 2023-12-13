/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let ans=0;
    for(let el of str)
    {  
      ch=el.toLowerCase();
      console.log(ch);
      if(['a', 'e', 'i', 'o', 'u'].includes(ch))ans++;
    }
    return ans;

}

module.exports = countVowels;