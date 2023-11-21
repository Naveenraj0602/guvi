const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  
  const getPrimeNumbers = (arr) => {
    return arr.filter((num) => isPrime(num));
  };
  
  const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = getPrimeNumbers(inputNumbers);
  console.log(primeNumbers);
  