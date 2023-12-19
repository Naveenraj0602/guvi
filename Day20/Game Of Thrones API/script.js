// Function to create a character card
function createCharacterCard(character) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = character.imageUrl;
    card.appendChild(img);

    let name = document.createElement('h3');
    name.textContent = "Name: " + character.fullName;
    name.classList.add('card-title');
    card.appendChild(name);

    let title = document.createElement('p');
    title.textContent = "Title: " + character.title;
    title.classList.add('card-title');
    card.appendChild(title);

    let family = document.createElement('p');
    family.textContent = "Family: " + character.family;
    family.classList.add('card-title');
    card.appendChild(family);

    return card;
}

// Function to fetch characters and create cards
function fetchAndCreateCards() {
    fetch('https://thronesapi.com/api/v2/Characters')
        .then(req => req.json())
        .then(data => {
            const characterContainer = document.querySelector('.characterCards');
            data.forEach(character => {
                const card = createCharacterCard(character);
                characterContainer.appendChild(card);
            });
        })
        .catch(error => console.error(error));
}

// Call the function to fetch and create cards
fetchAndCreateCards();
