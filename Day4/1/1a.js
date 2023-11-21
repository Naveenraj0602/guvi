// Anonymous Function
const input = function(arr) {
    var a = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        a.push(arr[i]);
      }
    }
  
    console.log(a);
  };
  
  input([23, 25, 22, 36, 50]);
  
  
  // IIFE
  (function(arr) {
    var a = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        a.push(arr[i]);
      }
    }
  
    console.log(a);
  })([22, 24, 21, 35, 51]);
  