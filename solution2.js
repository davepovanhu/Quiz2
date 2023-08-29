function findLongestWord(inputString) {
    // Step 1: Split the input string into an array of words
    const words = inputString.split(' ');
  
    // Step 2: Initialize a variable to keep track of the longest word
    let longestWord = '';
  
    // Step 3: Loop through each word in the array
    for (const word of words) {
      // Step 4: Check if the current word is longer than the current longest word
      if (word.length > longestWord.length) {
        // If it is, update the longestWord variable
        longestWord = word;
      }
    }
  
    // Step 5: Return the longest word found
    return longestWord;
  }
  
  // Example usage:
  const inputString = 'Web Development Tutorial';
  const longest = findLongestWord(inputString);
  console.log(longest); // Output: 'Development'
  