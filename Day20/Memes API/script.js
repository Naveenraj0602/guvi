// Function to create a meme card
function createMemeCard(meme) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = meme.url;
    card.appendChild(img);

    let name = document.createElement('h3');
    name.textContent = "Name: " + meme.name;
    name.classList.add('card-title');
    card.appendChild(name);

    return card;
}

// Function to fetch memes and create cards
function fetchAndCreateCards() {
    fetch('https://api.imgflip.com/get_memes')
        .then(req => req.json())
        .then(data => {
            const memeContainer = document.querySelector('.memeCards');
            data.data.memes.forEach(meme => {
                const card = createMemeCard(meme);
                memeContainer.appendChild(card);
            });
        })
        .catch(error => console.error(error));
}

// Call the function to fetch and create cards
fetchAndCreateCards();
