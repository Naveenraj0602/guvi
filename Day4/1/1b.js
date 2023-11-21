// Anonymous Function
const convertToTitleCase = function(arr) {
    return arr.map(function(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    });
  };
  
  console.log(convertToTitleCase(["apple", "banana", "cherry"]));
  
  // IIFE
  (function(arr) {
    const result = arr.map(function(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    });
    console.log(result);
  })(["apple", "banana", "cherry"]);
  