

const pokemonContainer = document.getElementById('pokemon-container');

async function fetchPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemonData = await response.json();
  console.log(pokemonData.name)
  console.log(pokemonData)
  return pokemonData;
}

async function fetchAllPokemon() {
  const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1100'; // Fetching first 1000 Pokemons

  const response = await fetch(pokemonListUrl);
  const pokemonList = await response.json();

  pokemonList.results.forEach(async (pokemon) => {
    const pokemonData = await fetchPokemonData(pokemon.name);
    createPokemonCard(pokemonData);
  });
}

function createPokemonCard(pokemonData) {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');

  pokemonCard.innerHTML = `
    <h2 class="text-black">${pokemonData.name}</h2>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
    <h3 class="text-black">Abilities:</h3>
    <ul class="text-black">
      ${pokemonData.abilities.map(arrayItem => `<li>${arrayItem.ability.name}</li>`).join('')}
    </ul>
    <h3 class="text-black">Base Experience:</h3>
    <p class="text-black">${pokemonData.base_experience}</p>
  `;

  pokemonContainer.appendChild(pokemonCard);
}

document.addEventListener("DOMContentLoaded", fetchAllPokemon);


























