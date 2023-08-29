function capitalizeWords(inputStringz) {
    // Split the input string into an array of words
    const words = inputStringz.split(' ');
  
    // Initialize an empty array to store the capitalized words
    const capitalizedWords = [];
  
    // Loop through each word in the array
    for (const word of words) {
      // Capitalize the first letter of the word and add the rest of the word as-is
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  
      // Push the capitalized word into the new array
      capitalizedWords.push(capitalizedWord);
    }
  
    // Join the capitalized words back into a single string with spaces
    const resultString = capitalizedWords.join(' ');
  
    return resultString;
  }
  
  // Example usage:
  const inputStringz = 'the quick brown fox';
  const capitalizedString = capitalizeWords(inputStringz);
  console.log(capitalizedString); // Output: 'The Quick Brown Fox'
  

  