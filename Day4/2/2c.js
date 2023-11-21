const sumOfNumbers = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const resultSum = sumOfNumbers(numbers);
  console.log(resultSum);
  