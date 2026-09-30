{/**Write a function findLongestWord that takes a string (a sentence) and returns the longest word in it.
A word is defined as a sequence of one or more letters (a-z, A-Z) or numbers (0-9). Punctuation and spaces should not be considered part of a word.
If there are multiple words with the same maximum length, return the first one encountered in the sentence.

Example 1
Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "jumped"

Example 2
Input: sentence = "Hello world, how are you today?"
Output: "Hello"

Constraints
The input `sentence` will be a string.
The length of the string will not exceed 10,000 characters. */}

function findLongestWord(sentence) {
  
  let words = sentence.match(/[a-zA-Z0-9]+/g) || [];

  let longestWord = "";
  for(let word of words){
    if(word.length > longestWord.length){
      longestWord = word;
    }

  }

  return longestWord;
}