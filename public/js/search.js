const search = document.getElementById('search');
const pokeResults = document.getElementById('poke-results');

//let pokemonResults = [];
const formSubmitHandler = async (p_name) => {
  const response = await fetch(`/api/pokemon/${p_name}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to find pokemon');
  }
};

search.addEventListener('submit', formSubmitHandler);


