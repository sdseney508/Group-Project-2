const router = require('express').Router();
const { UserPokedex, Captured } = require('../../models');
const withAuth = require('../../utils/auth');
const pokehelper = require('../../utils/pokehelper');

//get the list of all pokemon
// route:  /api/pokemon
//uses an axios fetch call  all the pokemon from the pokedex2 api
//will need a button to call it from the user page.  See views
router.get('/', async (req, res) => {
  try {
    //make this a get_all
    const pokemons = await pokehelper.get_all();
    console.log(pokemons);
    res.render('homepage', {
      pokemons,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// search request
router.get('/', async (req, res) => {
  let name = req.query.name;
  if (name) {
    let pokemons = await pokehelper.get_one(name);
    res.json(pokemons);
  }
  try {
    res.render('pokemondetails', {
      pokemons,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


//look for info about a certain pokemon, have to readd withAuth
router.get('/:id', async (req, res) => {
  try {
    //make this get_one
    const pokemons = await pokehelper.get_one(req.params.id);
    console.log(pokemons);
    res.render('pokemondetails', {
      pokemons,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//tag a favorite
router.post('/favorite/:id', withAuth, async (req, res) => {
  try {
    const updatedFavorite = await UserPokedex.create(
      {
        where: { user_id: req.session.user_id }
      }
    );

    res.render('pokemondetails', {
      pokemon,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//tag a captured
router.post('/captured/:id', withAuth, async (req, res) => {
  try {
    const createdCaptured = await Captured.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.render('pokemondetails', {
      pokemon,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//remove a pokemon from a users pokdex.  the where clause uses the pokemon's name and unique id to find the right record
router.delete('/favorite/:name', withAuth, async (req, res) => {
  try {
    const favoriteData = await UserPokedex.destroy({
      where: {
        name: req.params.name,
        user_id: req.session.user_id,
      },
    });

    if (!favoriteData) {
      res.status(404).json({ message: "No pokemon found to delete from this user's Pokedex.  Please try again." });
      return;
    }

    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//remove captured
//uses the pokemon's name and user id to find the right record to remove from the captured table
router.delete('/captured/:name', withAuth, async (req, res) => {
  try {
    const capturedData = await Captured.destroy({
      where: {
        name: req.params.name,
        user_id: req.session.user_id,
      },
    });

    if (!capturedData) {
      res.status(404).json({ message: 'No blog found to delete with this id.  Please try again' });
      return;
    }

    res.status(200).json(capturedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
