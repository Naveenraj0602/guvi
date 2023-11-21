const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  
  const convertToTitleCase = (arr) => {
    return arr.map((str) => toTitleCase(str));
  };
  
  const inputArray = ["apple", "banana", "cherry"];
  const titleCaseArray = convertToTitleCase(inputArray);
  console.log(titleCaseArray);
  