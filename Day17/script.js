fetch('https://restcountries.com/v3.1/all', {
    method: 'GET'
})
    .then(req => req.json())
    .then(data => createCards(data))
    .catch(error => console.error(error));

    function createCards(data) {
        let body = document.getElementById('cardDetails');
    
        let row = document.createElement('div');
        row.className = 'row';
    
        data.forEach((e) => {
            let col = document.createElement('div');
            col.className = 'pad col-sm-6 col-md-4 col-lg-4 col-xl-4';
    
            let card = document.createElement('div');
            card.className = 'card h-100';
    
            // Front of the card
            let front = document.createElement('div');
            front.className = 'front';
    
            let cardHeader = document.createElement('div');
            cardHeader.className = 'card-header';
            cardHeader.innerHTML = `<h1 class='text-center' id='title'>${e.name.common}</h1>`;
            front.appendChild(cardHeader);
    
            let cardImg = document.createElement('img');
            cardImg.className = 'card-img-top';
            cardImg.src = e.flags.png;
            cardImg.alt = 'Country Flag';
            front.appendChild(cardImg);
    
            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';
    
            let cardText = document.createElement('div');
            cardText.className = 'card-text';
            cardText.innerHTML = `<p>Capital: ${e.capital}</p>
                                 <p>Region: ${e.region}</p>
                                 <p>Country Code: ${e.cca2}</p>`;
            cardBody.appendChild(cardText);
    
            let weatherButton = document.createElement('button');
            weatherButton.className = 'button btn-primary';
            weatherButton.innerText = 'Get Weather';
            weatherButton.addEventListener('click', function() {
                toggleCard(card);
                getWeather(e.latlng[0], e.latlng[1], card);
            });
            cardBody.appendChild(weatherButton);
    
            front.appendChild(cardBody);
    
            // Back of the card
            let back = document.createElement('div');
            back.className = 'back';
    
            back.style.display = 'none';
    
            let backContent = document.createElement('div');
            backContent.className = 'card-body';
            backContent.innerHTML = '<p id="weatherDescription"></p><p id="temperature"></p>';
    
            let backButton = document.createElement('button');
            backButton.className = 'button btn-secondary';
            backButton.innerText = 'Back';
            backButton.addEventListener('click', function() {
                toggleCard(card);
            });
            backContent.appendChild(backButton);
    
            back.appendChild(backContent);
    
            card.appendChild(front);
            card.appendChild(back);
    
            col.appendChild(card);
            row.appendChild(col);
        });
    
        body.appendChild(row);
    }
    

function toggleCard(card) {
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');

    if (front.style.display === 'none') {
        front.style.display = 'block';
        back.style.display = 'none';
    } else {
        front.style.display = 'none';
        back.style.display = 'block';
    }
}

function getWeather(latitude, longitude, card) {
    let apiKey = 'db29c489e363e38f1f67a548848abd42';
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(weatherData => {
            card.querySelector('#weatherDescription').innerText = `Weather: ${weatherData.weather[0].description}`;
            card.querySelector('#temperature').innerText = `Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)}°C`;
        })
        .catch(error => console.error(error));
}
