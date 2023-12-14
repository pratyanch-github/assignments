/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // creating a map
  let mp1={};
  let mp2={};
  for(let ch of str1)
  {  
     ch=ch.toLowerCase();
     if(ch in Object.keys(mp1))mp1[ch]++;
     else mp1[ch]=1;
  }
  for(let ch of str2)
  {  
     ch=ch.toLowerCase();
     if(ch in Object.keys(mp2))mp2[ch]++;
     else mp2[ch]=1;
  }

  // comparing individual properties of the objects
  for (let key in mp1) {
    if(!(key in mp2))return false;
    else if (mp1[key] !== mp2[key]) {
      return false;
    }
  }

  // maybe some key of mp2 not in mp1
  for (let key in mp2) {
    if(!(key in mp1))return false;
    else if (mp1[key] !== mp2[key]) {
      return false;
    }
  }

  console.log(mp1, mp2);

  return true;
}

module.exports = isAnagram;
