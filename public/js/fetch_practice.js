const options = {
	method: 'GET',
	headers: {'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com', 'X-RapidAPI-Key': 'null'}
};

fetch('https://pokedex2.p.rapidapi.com/pokedex/uk/pikachu', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));d