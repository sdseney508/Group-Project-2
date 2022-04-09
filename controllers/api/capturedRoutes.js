const router = require('express').Router();
const { Captured } = require('../../models');
const withAuth = require('../../utils/auth');
const pokehelper = require('../../utils/pokehelper');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body.name);
    const poke_obj = await pokehelper.get_one(req.body.name);
    console.log(poke_obj);
    const newCaptured = await Captured.create({
      poke_obj,
      user_id: req.session.user_id
    });

    res.status(200).json(newCaptured);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
