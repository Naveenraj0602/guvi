var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var jsonData = JSON.parse(request.responseText);

    jsonData.forEach((item) => {
      console.log(
        item.name,
        ":",
        "region : ",
        item.region,
        "subregion :",
        item.subregion, // Corrected property name
        "and population is",
        item.population
      );
    });
  } else {
    console.error('Error fetching data from the API');
  }
};

request.send();
