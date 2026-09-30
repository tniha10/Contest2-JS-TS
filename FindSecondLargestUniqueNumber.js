{/**Given an array of numbers, return the second largest unique number. If there are fewer than two unique numbers in the array, return null.

Example 1
Input: numbers = [10,5,20,5,15]
Output: 15

Example 2
Input: numbers = [3,3,3]
Output: null

Constraints
The input `numbers` will be an array of integers.
The array can contain positive, negative, or zero values.
The array length will be between 0 and 1000. */}

function findSecondLargestUnique(numbers) {
  
  let uniqueNumbers = [...new Set(numbers)];

  if(uniqueNumbers.length < 2){
    return null;
  }

  uniqueNumbers.sort((a, b) => b - a);

  return uniqueNumbers[1];

}