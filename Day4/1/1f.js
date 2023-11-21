// Anonymous Function
const findMedianSortedArrays = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      const mid = length / 2;
      console.log((mergedArray[mid - 1] + mergedArray[mid]) / 2);
    } else {
      const mid = Math.floor(length / 2);
      console.log(mergedArray[mid]);
    }
  };
  
  findMedianSortedArrays([1, 3, 5], [2, 4, 6]);
  
  // IIFE
  (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      const mid = length / 2;
      console.log((mergedArray[mid - 1] + mergedArray[mid]) / 2);
    } else {
      const mid = Math.floor(length / 2);
      console.log(mergedArray[mid]);
    }
  })([1, 3, 5], [2, 4, 6]);
  