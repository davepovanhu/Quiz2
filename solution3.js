function countVowels(inputStrings) {
    // Convert the input string to lowercase to make the check case-insensitive
    const lowercaseString = inputStrings.toLowerCase();
  
    // Define a string containing all the vowels
    const vowels = 'aeiou';
  
    // Initialize a count variable to keep track of the number of vowels
    let vowelCount = 0;
  
    // Loop through each character in the string
    for (const char of lowercaseString) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage:
  const inputStrings = 'The quick brown fox';
  const numberOfVowels = countVowels(inputStrings);
  console.log(numberOfVowels); // Output: 5
  