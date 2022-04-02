
const pokehelper = require('./utils/pokehelper');
Pokemon.setLanguage('english');

const axios = require('axios');
let poke_id = 1;

const url = `https://pokeapi.co/api/v2/pokemon/${poke_id}`;
//initialize global variable
let evolutions = [];
let gen = [];
let types = [];
let abilities = [];
let strengths = [];
let weaknesses = [];
// let generation = [];
let games = [];
let weight = '';
let base_hp = '';
let base_attack = '';
let base_defense = '';
let speed = '';


    axios.get(url).then(async function (response) {
        weight = response.data.weight;
        base_hp = response.data.stats[0].base_stat;
        base_attack = response.data.stats[1].base_stat;
        base_defense = response.data.stats[2].base_stat;
        speed = response.data.stats[5].base_stat;

        // let generation = Pokemon.getGeneration(1);

        for (i = 0; i < (response.data.types).length; i++) {
            types[i] = response.data.types[i].type.name;
        };

        for (i = 0; i < (response.data.abilities).length; i++) {
            abilities[i] = response.data.abilities[i].ability.name;
        };

        //sequence through the types and create an arrayof types they are strong and weak against
        for (i = 0; i < (types).length; i++) {
            //first strengthes then weaknesses
            //get the type of pokemon
            let ptype = types[i];

            // pass that to the api via a string literal
            let type_url = `https://pokeapi.co/api/v2/type/${ptype}`

            //make the axios call
            await axios.get(type_url).then(function (response) {
                // console.log(response.data.damage_relations);
                // get strengths by looping through the double damage to array
                for (i = 0; i < response.data.damage_relations.double_damage_to.length; i++) {
                    strengths[i] = response.data.damage_relations.double_damage_to[i].name;
                    console.log(strengths);
                };

                //now weaknesses
                for (i = 0; i < response.data.damage_relations.double_damage_from.length; i++) {
                    weaknesses[i] = response.data.damage_relations.double_damage_from[i].name;
                };
            });
        };

        // for (i = 0; i < (response.data.types).length; i++) {
        //     generation[i] = response.data.types[i].type.name;
        // };

        for (i = 0; i < (response.data.game_indices).length; i++) {
            games[i] = response.data.game_indices.name;
        };

        // console.log(response);
        console.log('Name: ' + response.data.name + "\nType: " + types);
        console.log('Weight: ' + weight);
        console.log('Abilities: ' + abilities)
        console.log('Strong against: ' + strengths);
        console.log('Weak against: ' + weaknesses);
        console.log('Base Attack: ' + base_attack);
        console.log('Base Defense: ' + base_defense);
        console.log('Speed: ' + speed);
        console.log('Evolution Line: ');
        console.log(evolutions);



    });