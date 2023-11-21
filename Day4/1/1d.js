// Anonymous Function
const getPrimeNumbers = function(arr) {
    const isPrime = function(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    };
  
    const primes = arr.filter(function(num) {
      return isPrime(num);
    });
  
    console.log(primes);
  };
  
  getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  // IIFE
  (function(arr) {
    const isPrime = function(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    };
  
    const primes = arr.filter(function(num) {
      return isPrime(num);
    });
  
    console.log(primes);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  