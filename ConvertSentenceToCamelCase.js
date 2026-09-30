{/**Given a sentence where words are separated by spaces, convert it into camelCase format. The first word of the resulting string should start with a lowercase letter, and all subsequent words should start with an uppercase letter. All other letters should be lowercase, and there should be no spaces.

Example 1
Input: sentence = "hello world"
Output: "helloWorld"

Example 2
Input: sentence = "java script is fun"
Output: "javaScriptIsFun"

Constraints
The input `sentence` will be a string.
Words will be separated by one or more spaces.
The input may contain leading or trailing spaces. */}

function convertToCamelCase(sentence) {
  let trimmedSentence = sentence.trim();
  let splitSentence = trimmedSentence.split(/\s+/);
  let result = splitSentence[0].toLowerCase();

  for(let i = 1; i < splitSentence.length; i++){
    let word = splitSentence[i];

    if(word.length > 0){
      result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    }
  }

  return result;

}