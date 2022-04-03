Pokemon = require('pokemon.js');
Pokemon.setLanguage('english');
const axios = require('axios');

let url = `https://pokeapi.co/api/v2/pokemon/`;
let gen_url = 'https://pokeapi.co/api/v2/pokemon-species/';
//initialize global variable
let poke_object = [];
let poke_objects = [];
//stores the previous id for the get_all function to prevent the rare occurence of showing the same pokemon twice
let pid = 0;

const get_one = async (id) => {
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
    let p_url = url + id;

    await axios.get(p_url).then(async function (response) {
        name = response.data.name;
        weight = response.data.weight;
        base_hp = response.data.stats[0].base_stat;
        base_attack = response.data.stats[1].base_stat;
        base_defense = response.data.stats[2].base_stat;
        speed = response.data.stats[5].base_stat;
        image_url = response.data.sprites.front_default;

        for (let i = 0; i < (response.data.types).length; i++) {
            types[i] = response.data.types[i].type.name;
        };

        for (let i = 0; i < (response.data.abilities).length; i++) {
            abilities[i] = response.data.abilities[i].ability.name;
        };

        //sequence through the types and create an arrayof types they are strong and weak against
        for (let i = 0; i < (types).length; i++) {
            //first strengthes then weaknesses
            //get the type of pokemon
            let ptype = types[i];

            // pass that to the api via a string literal, this is a different api lpocation than the 
            //overall pokemon one
            let type_url = `https://pokeapi.co/api/v2/type/${ptype}`

            await axios.get(type_url).then(function (response) {
                // get strengths / weaknesses by looping through the double damage to array
                for (let i = 0; i < response.data.damage_relations.double_damage_to.length; i++) {
                    strengths[i] = response.data.damage_relations.double_damage_to[i].name;
                    weaknesses[i] = response.data.damage_relations.double_damage_from[i].name;

                };
            });
        };
    });

    await Pokemon.getEvolutionLine(name).then(async function (response) {
        for (i = 0; i < response.length; i++) {
            evolutions[i] = response[i];
            evo_url = url + evolutions[i];
            await axios.get(evo_url).then(function (response) {
                evo_pic.push(response.data.sprites.front_default);
            });
        };
    });

    g_url = gen_url + id;
    await axios.get(g_url).then(function (response) {
        generation = response.data.generation.name;
    });

    poke_object = { name, types, weight, abilities, weaknesses, strengths, base_attack, base_defense, speed, evolutions, evo_pic, generation };
    return poke_object;
};

const get_all = async () => {
    for (i = 1; i < 6; i++) {
        let id = Math.floor(Math.random() * 898) + 1;
        if (pid ===0){
            pid = id;
        } else if (pid === id){
            let id = Math.floor(Math.random() * 898) + 1;
            pid = id;
        }
        let name = '';
        let generation = [];
        let types = [];
        let abilities = [];
        let image_url = '';
        let p_url = url + id;

        await axios.get(p_url).then(async function (response) {
            name = response.data.name;
            image_url = response.data.sprites.front_default;

            for (j = 0; j < (response.data.types).length; j++) {
                types[j] = response.data.types[j].type.name;
            };

            for (k = 0; k < (response.data.abilities).length; k++) {
                abilities[k] = response.data.abilities[k].ability.name;
            };
        });

        g_url = gen_url + id;
        await axios.get(g_url).then(function (response) {
            generation = response.data.generation.name;
        });

        poke_objects.push({ name, types, abilities, image_url });
        
    }
    return poke_objects;
};

module.exports = { get_one, get_all };