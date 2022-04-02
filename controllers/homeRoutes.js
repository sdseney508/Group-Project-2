const router = require('express').Router();
const { Favorite, Captured, User } = require('../models');
const withAuth = require('../utils/auth');

//take me to the homepage
router.get('/', async (req, res) => {
  try {
    // Get all pokemon associated with the logged in user name of the blog creator
    const userData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialization so we get rid of the unwanted sequel stuff.  See class video from 
    //3/26/2022
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('/', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // pull only blogs from the user logged in
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
      //need to join in the blog comments so they can recomment if desired, ask for help here
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
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
