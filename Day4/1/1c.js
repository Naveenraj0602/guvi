// Anonymous Function
const sumArray = function(arr) {
    const sum = arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
    console.log(sum);
  };
  
  sumArray([1, 2, 3, 4, 5]);
  
  // IIFE
  (function(arr) {
    const sum = arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
    console.log(sum);
  })([1, 2, 3, 4, 5]);
  