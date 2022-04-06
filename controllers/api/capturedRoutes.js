const router = require('express').Router();
const { UserPokedex, Captured } = require('../../models');
const withAuth = require('../../utils/auth');
const pokehelper = require('../../utils/pokehelper');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCaptured = await Captured.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCaptured);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
