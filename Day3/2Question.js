var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var jsonData = JSON.parse(request.responseText);
    var flag = [];

    jsonData.forEach((item) => {
      flag[item.name] = item.flag;
      console.log(item.name, ":", item.flag);
    });

    console.log(flag);
  } else {
    console.error('Error fetching data from the API');
  }
};

request.send();
