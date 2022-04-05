const router = require('express').Router();
const { UserPokedex, Captured, User } = require('../models');
const withAuth = require('../utils/auth');
const pokehelper = require('../utils/pokehelper');

router.get('/', async (req, res) => {
  try {

    //when you hit the homepage, render 8 pokemon, dont make them log in
    const pokemons = await pokehelper.get_all();
    console.log(pokemons);
    // res.status(200).json(pokemons);
    // res.render('/', { 
    //   pokemons
    // });
    // Serialization so we get rid of the unwanted sequel stuff.  See class video from 
    //3/26/2022

    // Pass serialized data and session flag into template
    res.render('homepage', {
      pokemons,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.get('/:user_id', async (req, res) => {
  try {
    // Get all pokemon associated with the logged in user name of the blog creator
    const userData = await UserPokedex.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialization so we get rid of the unwanted sequel stuff.  See class video from 
    //3/26/2022
    const userPokemon = userData.map((pokemon) => pokemon.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('/', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
