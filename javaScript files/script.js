
document.getElementById('searchButton').addEventListener('click', async () => {
    const nameOrId = document.getElementById('pokemonName').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    if (response.ok) {
      const pokemon = await response.json();
      console.log(pokemon)
      displayPokemonInfo(pokemon);
    } else {
      document.getElementById('pokemonInfo').innerHTML = '<p>Pokémon not found. Please try again.</p>';
    }
  });
  
  function displayPokemonInfo(pokemon) {
    const info = `
      <h2 class="text-black">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <p class="text-black">Height: ${pokemon.height}</p>
      <p class="text-black">Weight: ${pokemon.weight}</p>
      <a href="details.html?name=${pokemon.name}" class="btn btn-danger text-black mb-3">View Details</a>
    `;
    
    document.getElementById('pokemon-card').innerHTML = info;
  }
  






























