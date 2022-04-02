const router = require('express').Router();
const { UserPokedex, Captured } = require('../../models');
const withAuth = require('../../utils/auth');
const pokehelper = require('../../utils/pokehelper');

//get the list of all pokemon
// route:  /api/pokemon
//uses an axios fetch call  all the pokemon from the pokedex2 api
//will need a button to call it from the user page.  See views
router.GET('/', withAuth, async (req, res) => {
    try {
        //make this a get_all
        const pokemon = fetch('https://pokedex2.p.rapidapi.com/pokedex/uk/pikachu', options);
        console.log(pokemon);
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

//look for info about a certain pokemon
router.GET('/:id', withAuth, async (req, res) => {
    try {
        //make this get_one
        const pokemon = await get_one.get(req.params.id)
        console.log(pokemon);
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

//tag a favorite
router.post('/favorite', withAuth, async (req, res) => {
    try {
        const updatedBlog = await Blog.update({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

//tag a captured
router.post('/captured', withAuth, async (req, res) => {
    try {
        const updatedBlog = await Blog.update({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

//remove favorite
router.delete('/favorite/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found to delete with this id.  Please try again' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//remove captured
router.delete('/captured/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found to delete with this id.  Please try again' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
