async function fetchData() {
    try{
        const pokemonName = document.getElementById('pokemonName').value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error(`Couldn't fetch data.`);
        }

        const data = await response.json();
        const pokemonImage = document.getElementById('pokemonImage');
        const pokemonSprite = data.sprites.front_default;

        pokemonImage.src = pokemonSprite;
        pokemonImage.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}