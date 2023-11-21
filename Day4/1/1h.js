// Anonymous Function
const rotateArray = function(arr, k) {
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
  };
  
  rotateArray([1, 2, 3, 4, 5], 2);
  
  // IIFE
  (function(arr, k) {
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
  })([1, 2, 3, 4, 5], 2);
  