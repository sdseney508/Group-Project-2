const options = {
	method: 'GET',
	headers: {'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com', 'X-RapidAPI-Key': 'null'}
};

url1 = 'https://pokedex2.p.rapidapi.com/pokedex/uk/pikachu'
url2 = 'https://pokedex2.p.rapidapi.com/pokedex/uk/pikachu'

const pokedex = fetch('https://pokedex2.p.rapidapi.com/pokedex/uk/pikachu', options);
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));d
console.log(pokedex)