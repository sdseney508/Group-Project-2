Pokemon = require('pokemon.js');
Pokemon.setLanguage('english');
const axios = require('axios');
const { response } = require('express');

let poke_id = 15;
let id = 15;
const irl = 3;
const url = `https://pokeapi.co/api/v2/pokemon/${poke_id}`;
const all_url = `https://pokeapi.co/api/v2/pokemon/`;
let gen_url = 'https://pokeapi.co/api/v2/pokemon-species/';
//initialize global variable
let pokeobjects = [];
// const findversion = (versions) => {
//     for (const property in response.data.sprites.versions) {
//         for (const genProp in versions[property]) {
//             if (versions[property][genProp])
//         };

//     }
// }

const init = async () => {
    // await axios.get(all_url).then(async function (response) {

    //     for (irl = 148; irl < 155; irl++) {
            let name = '';
            let evolutions = [];
            let generation = [];
            let types = [];
            let abilities = [];
            let strengths = [];
            let weaknesses = [];
            let weight = '';
            let base_hp = '';
            let base_attack = '';
            let base_defense = '';
            let speed = '';
            let image_url = '';
            let evo_pic = [];
            
            let newurl = 'https://pokeapi.co/api/v2/pokemon/' + irl;
            
            // g_url = gen_url + irl;
            // await axios.get(g_url).then(function (response) {
            //     generation = response.data.generation.name;
            // });

            await axios.get(newurl).then(async function (response) {
                name = response.data.name;
                weight = response.data.weight;
                base_hp = response.data.stats[0].base_stat;
                base_attack = response.data.stats[1].base_stat;
                base_defense = response.data.stats[2].base_stat;
                speed = response.data.stats[5].base_stat;
                image_url = response.data.sprites.front_default;
             
                types = response.data.types.map(({type}) => type.name);
                abilities = response.data.abilities.map(({ability}) => ability.name)
                // for (let i = 0; i < (response.data.types).length; i++) {
                //     types[i] = response.data.types[i].type.name;
                // };

                // for (let i = 0; i < (response.data.abilities).length; i++) {
                //     abilities[i] = response.data.abilities[i].ability.name;
                // };

                //sequence through the types and create an arrayof types they are strong and weak against
                for (i = 0; i < (types).length; i++) {
                    //first strengthes then weaknesses
                    //get the type of pokemon
                    let ptype = types[i];
    
                    // pass that to the api via a string literal
                    let type_url = `https://pokeapi.co/api/v2/type/${ptype}`
    
                    //make the axios call
                    await axios.get(type_url).then(function (response) {
                        // get strengths by looping through the double damage to array
                        for (let i = 0; i < response.data.damage_relations.double_damage_to.length; i++) {
                            strengths[i] = response.data.damage_relations.double_damage_to[i].name;
                            weaknesses[i] = response.data.damage_relations.double_damage_from[i].name;
                        };
                    });
                };
            });

            await Pokemon.getEvolutionLine(irl).then(async function (response) {
                for (let ev = 0; ev < response.length; ev++) {
                    evolutions[ev] = response[ev];
                    evo_pic.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutions[ev]}.png`);
                };
            });

            poke_object = { irl, name, types, weight, abilities, weaknesses, strengths, base_attack, base_defense, speed, evolutions, evo_pic, generation };
            
            console.log(newurl);
            // console.log(evo_pic);
            pokeobjects.push(poke_object);
        // };
    // });
    console.log(pokeobjects);
};

init();