const router = require('express').Router();
const { UserPokedex, User, Captured } = require('../models');
const withAuth = require('../utils/auth');
const pokehelper = require('../utils/pokehelper');

router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
    } else {
    //when you hit the homepage, render 8 pokemon, dont make them log in
      const all_pokemon = await pokehelper.get_all();
      console.log(all_pokemon);

      res.render('homepage', {
        all_pokemon,
        logged_in: req.session.logged_in
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Captured }],
    });

    const user = userData.get({ plain: true });

    const captured = user.captureds;
    // const pokeCard=[];
    
    // for (let i = 0; i < userPoke.length; i++) {
      
      //     const pokeId =userPoke[i].poke_id;
      //     const buildPoke = await pokehelper.get_one(pokeId);
      // //     pokeCard.push(buildPoke);
      // console.log(buildPoke)
      // }
      // console.log(pokeCard);
      
      const pokemons = await pokehelper.get_all();

    res.render('dashboard', {
      ...user,
      captured,
      pokemons,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
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

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.render('signup');
    return;
  }
  res.redirect('/dashboard');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
