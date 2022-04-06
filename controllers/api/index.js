const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pokemonRoutes = require('./pokemonRoutes');
const capturedRoutes = require('./capturedRoutes');

router.use('/users', userRoutes);
router.use('/pokemon', pokemonRoutes);
router.use('/captured', capturedRoutes);

module.exports = router;
