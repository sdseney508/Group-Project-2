Pokemon = require('pokemon.js');
Pokemon.setLanguage('english');
const axios = require('axios');
const poketype = require('./utils/poketype');
const pokehelper = require('./utils/pokehelper');

let poke_id = 1;
let id = 1;
const irl = 1;
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
const poke_type = [{ "name": "Normal", "immunes": ["Ghost"], "weaknesses": ["Rock", "Steel"], "strengths": [] },
{ "name": "Fire", "immunes": [], "weaknesses": ["Fire", "Water", "Rock", "Dragon"], "strengths": ["Grass", "Ice", "Bug", "Steel"] },
{ "name": "Water", "immunes": [], "weaknesses": ["Water", "Grass", "Dragon"], "strengths": ["Fire", "Ground", "Rock"] },
{ "name": "Electric", "immunes": ["Ground"], "weaknesses": ["Electric", "Grass", "Dragon"], "strengths": ["Water", "Flying"] },
{ "name": "Grass", "immunes": [], "weaknesses": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"], "strengths": ["Water", "Ground", "Rock"] },
{ "name": "Ice", "immunes": [], "weaknesses": ["Fire", "Water", "Ice", "Steel"], "strengths": ["Grass", "Ground", "Flying", "Dragon"] },
{ "name": "Fighting", "immunes": ["Ghost"], "weaknesses": ["Poison", "Flying", "Psychic", "Bug", "Fairy"], "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"] },
{ "name": "Poison", "immunes": ["Steel"], "weaknesses": ["Poison", "Ground", "Rock", "Ghost"], "strengths": ["Grass", "Fairy"] },
{ "name": "Ground", "immunes": ["Flying"], "weaknesses": ["Grass", "Bug"], "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"] },
{ "name": "Flying", "immunes": [], "weaknesses": ["Electric", "Rock", "Steel"], "strengths": ["Grass", "Fighting", "Bug"] },
{ "name": "Psychic", "immunes": ["Dark"], "weaknesses": ["Psychic", "Steel"], "strengths": ["Fighting", "Poison"] },
{ "name": "Bug", "immunes": [], "weaknesses": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"], "strengths": ["Grass", "Psychic", "Dark"] },
{ "name": "Rock", "immunes": [], "weaknesses": ["Fighting", "Ground", "Steel"], "strengths": ["Fire", "Ice", "Flying", "Bug"] },
{ "name": "Ghost", "immunes": ["Normal"], "weaknesses": ["Dark"], "strengths": ["Psychic", "Ghost"] },
{ "name": "Dragon", "immunes": ["Fairy"], "weaknesses": ["Steel"], "strengths": ["Dragon"] },
{ "name": "Dark", "immunes": [], "weaknesses": ["Fighting", "Dark", "Fairy"], "strengths": ["Psychic", "Ghost"] },
{ "name": "Steel", "immunes": [], "weaknesses": ["Fire", "Water", "Electric", "Steel"], "strengths": ["Ice", "Rock", "Fairy"] },
{ "name": "Fairy", "immunes": [], "weaknesses": ["Fire", "Poison", "Steel"], "strengths": ["Fighting", "Dragon", "Dark"] }]

const init = async () => {
    pokehelper.get_all()
        .then(console.log);
    // let name = '';
    // let evolutions = [];
    // let generation = [];
    // let types = [];
    // let abilities = [];
    // let strengths = [];
    // let weaknesses = [];
    // let weight = '';
    // let base_hp = '';
    // let base_attack = '';
    // let base_defense = '';
    // let speed = '';
    // let image_url = '';
    // let evo_pic = [];
    // let newurl = all_url + irl;

    // g_url = gen_url + irl;
    // await axios.get(g_url).then(function (response) {
    //     generation = response.data.generation.name;
    // });

    // await axios.get(newurl).then(async function (response) {
    //     name = response.data.name;
    //     weight = response.data.weight;
    //     base_hp = response.data.stats[0].base_stat;
    //     base_attack = response.data.stats[1].base_stat;
    //     base_defense = response.data.stats[2].base_stat;
    //     speed = response.data.stats[5].base_stat;
    //     image_url = response.data.sprites.front_default;

    //     types = response.data.types.map(({ type }) => type.name);
    //     abilities = response.data.abilities.map(({ ability }) => ability.name)
 
    //     //sequence through the types and create an arrayof types they are strong and weak against
    //     for (i = 0; i < (types).length; i++) {
    //         // pass that to the api via a string literal
    //         let type_url = `https://pokeapi.co/api/v2/type/${types[i]}`

    //         //make the axios call
    //         await axios.get(type_url).then(function (response) {
    //             // get strengths by looping through the double damage to array
    //             for (let i = 0; i < response.data.damage_relations.double_damage_to.length; i++) {
    //                 strengths[i] = response.data.damage_relations.double_damage_to[i].name;
    //                 weaknesses[i] = response.data.damage_relations.double_damage_from[i].name;
    //             };
    //         });
    //     };
    //     // for (i = 0; i < (types).length; i++) {
    //     //     console.log(poketype.strengths(types[i]));
    //     //     strengths.push(poketype.strengths(types[i]));
    //     //     weaknesses.push(poketype.weaknesses(types[i]));
    //     // };
    //     // for (i = 0; i < (types).length; i++) {
    //     //     let ptype = types[i];
    //     //     s_and_w = poke_type.find(function (type) {
    //     //         if (type.name == ptype) {
    //     //             return true;
    //     //         };
    //     //         return s_and_w;
    //     //     });
    //     //     strengths.push(s_and_w.strengths);
    //     //     console.log(strengths);
    //     //     // strengths.push(poketype.strengths(types[i]));
    //     //     // weaknesses.push(poketype.weaknesses(types[i]));
    //     // };
    // });

    // await Pokemon.getEvolutionLine(irl).then(async function (response) {
    //     for (let ev = 0; ev < response.length; ev++) {
    //         evolutions[ev] = response[ev];
    //         evo_pic.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutions[ev]}.png`);
    //     };
    // });

    // poke_object = { irl, name, types, weight, abilities, weaknesses, strengths, base_attack, base_defense, speed, evolutions, evo_pic, generation };

    // console.log(newurl);
    // // console.log(evo_pic);
    // pokeobjects.push(poke_object);
    // // };
    // // });
    // console.log(pokeobjects);
};

init();