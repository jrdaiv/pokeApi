document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();
    displayPokemonDetails(pokemon);
  });
  
  function displayPokemonDetails(pokemon) {
    const details = `
      <h2 class="text-black">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <div class="card mt-3" style="background: transparent" >
        <div class="card-body text-black">
          <h5 class="card-title text-black">Abilities</h5>
          <ul>
            ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="card mt-3 text-black" style="background: transparent">
        <div class="card-body">
          <h5 class="card-title text-black">Types</h5>
          <ul>
            ${pokemon.types.map(type => `<li>${type.type.name}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="card mt-3 mb-5 text-black" style="background: transparent">
        <div class="card-body">
          <h5 class="card-title">Stats</h5>
          <ul class="text-black">
            ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    document.getElementById('pokemonDetails').innerHTML = details;
  }
  