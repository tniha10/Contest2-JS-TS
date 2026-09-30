{/**Given a string, find the first character that appears only once in the string. If no such character exists, return -1.

Example 1
Input: s = "aabbcdeff"
Output: "c"

Example 2
Input: s = "aabb"
Output: -1

Constraints
The input string `s` will consist of lowercase English letters.
`s` length will be between 0 and 1000. */}

function findFirstUniqueChar(s) {
  
  let frequency = {};
  for(let char of s){
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for(let char of s){
    if(frequency[char] === 1){
      return char;
    }
  }

  return -1;
}