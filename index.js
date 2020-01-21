/* 
The Caesar Cipher technique is one of the earliest and simplest method of encryption technique. It’s simply a type of substitution cipher, i.e., each letter of a given text is replaced by a letter some fixed number of positions down the alphabet. For example with a shift of 1, A would be replaced by B, B would become C, and so on. The method is apparently named after Julius Caesar, who apparently used it to communicate with his officials.
Thus to cipher a given text we need an integer value, known as shift which indicates the number of position each letter of the text has been moved down.
The encryption can be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,…, Z = 25. Encryption of a letter by a shift n can be described mathematically as.
*/

// Solution 1: Simple Solution
function caesarCipher (string, key) {
  key = key % 26;
  var alphabetsArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var lowerCaseString = string.toLowerCase();
  var newString = '';
  var charCount = lowerCaseString.length;

  for(i = 0; i < charCount; i++) {
    var currentLetter = lowerCaseString[i];
    if(currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var charIndex = alphabetsArr.indexOf(currentLetter);
    var newIndex = charIndex + key;
   
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex =  26 + newIndex;
     
    if (string[i] === lowerCaseString[i].toUpperCase()) {
      newString += alphabetsArr[newIndex].toUpperCase();
    } else {
      newString += alphabetsArr[newIndex];
    }
  }
  return newString;
}

// Running solution 
console.log(caesarCipher('Lorem Ipsum is simply dummy text of the printing and typesetting industry', 10));


// Solution 2: Using CharCode
function caesarCipherCharCode(string, key) {
  key = key % 26;
  let newString = '';
  string.toLowerCase().split('').forEach((c, i) => {
    if (c === ' ') {
      newString += ' ';
      return;
    }
    let char = String.fromCharCode((c.charCodeAt(0) + key - 97 ) % 26 + 97);

    if (string[i] === c.toUpperCase()) newString += char.toUpperCase();
    else newString += char;
  });
  return newString;
}

// Running solution 
console.log(caesarCipherCharCode('Lorem Ipsum is simply dummy text of the printing and typesetting industry', 10));


