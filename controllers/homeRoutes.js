const router = require('express').Router();
const { UserPokedex, User } = require('../models');
const withAuth = require('../utils/auth');
const pokehelper = require('../utils/pokehelper');

router.get('/', async (req, res) => {
  try {

    //when you hit the homepage, render 8 pokemon, dont make them log in
    const pokemons = await pokehelper.get_all();

    res.render('homepage', {
      pokemons,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.get('/pokemon/:id', async (req, res) => {
  try {
    // Get all pokemon associated with the logged in user name of the blog creator
    const pokemons = await pokehelper.get_one(req.params.id);
    console.log(pokemons);
    // Pass serialized data and session flag into template
    res.render('pokemondetails', {
      pokemons,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
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
