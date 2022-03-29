const router = require('express').Router();
const { Favorites, Captured } = require('../../models');
const withAuth = require('../../utils/auth');


//get the list of all pokemon
//make this
router.GET('/', withAuth, async (req, res) => {
    try {
        const pokemon = await Pokemon.GET({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/', withAuth, async (req, res) => {
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

router.delete('/:id', withAuth, async (req, res) => {
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
