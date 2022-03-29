const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pokemonRoutes = require('./pokemonRoutes');

router.use('/users', userRoutes);
router.use('/pokemon', pokemonRoutes);

module.exports = router;
