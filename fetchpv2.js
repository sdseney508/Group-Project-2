// const Pokemon = require('pokemon.js');

// Pokemon.setLanguage('english');

// Pokemon.getAll('water').then(console.log);

const axios = require('axios');

const url = "https://pokeapi.co/api/v2/pokemon/1";

axios.get(url).then(function (response) {
    let types = [];
    for (i = 0; i < (response.data.types).length; i++) {
        types[i] = response.data.types[i].type.name;
    };
    console.log('Name: ' + response.data.name + "\nType: " + types);
});
