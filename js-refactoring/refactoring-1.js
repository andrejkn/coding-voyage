// This function returns palindrome words from an array of strings
// Definition: Palindrome is a word/sentence that reads the same backward or forward

// function findPalindromes(words) {
//   let palindromes = [];

//   for (let word of words) {
//     let reversedWord = '';

//     for (let letter of word) {
//       reversedWord = letter + reversedWord;
//     }

//     if (reversedWord.toLocaleLowerCase() === word.toLocaleLowerCase()) {
//       palindromes.push(word);
//     }
//   }

//   return palindromes;
// }

// Break this problem into sub problems

// 1. Revese a word
const reverseWord = (word) =>
  word.split('').reduce((prevWord, letter) => `${letter}${prevWord}`, '');

// 2. Detect if word is palindrome
// If word is palindrome then return true, otherwise false
const isPalindrome = (word) =>
  reverseWord(word).toLocaleLowerCase() === word.toLocaleLowerCase();

// 3. Put it all together
// Returning an array of palindromes
const findPalindromes = (words) =>
  words.filter(word => isPalindrome(word));

function test() {
  const allPalindromes = ['rotor', 'Kayak', 'reviver', 'racecar', 'madam', 'refer'];

  const noPalindromes = ['red', '1234', 'Sam'];

  const somePalindromes = ['Radar', 'man', 'racecar', 'Rover', 'Level'];


  // Should return ['rotor', 'Kayak', 'reviver', 'racecar', 'madam', 'refer'];
  const result1 = findPalindromes(allPalindromes);
  console.log(result1);

  // Should return []
  const result2 = findPalindromes(noPalindromes);
  console.log(result2);

  // Should return ['Radar', 'racecar', 'Level']
  const result3 = findPalindromes(somePalindromes);
  console.log(result3);
}

test();