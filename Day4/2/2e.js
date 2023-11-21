const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const getPalindromes = (arr) => {
    return arr.filter((str) => isPalindrome(str));
  };
  
  const wordsArray = ["level", "hello", "radar", "world"];
  const palindromesArray = getPalindromes(wordsArray);
  console.log(palindromesArray);
  