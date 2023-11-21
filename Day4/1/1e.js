// Anonymous Function
const getPalindromes = function(arr) {
    const isPalindrome = function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    };
  
    const palindromes = arr.filter(function(str) {
      return isPalindrome(str);
    });
  
    console.log(palindromes);
  };
  
  getPalindromes(["level", "hello", "deed"]);
  
  // IIFE
  (function(arr) {
    const isPalindrome = function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    };
  
    const palindromes = arr.filter(function(str) {
      return isPalindrome(str);
    });
  
    console.log(palindromes);
  })(["level", "hello", "deed"]);
  