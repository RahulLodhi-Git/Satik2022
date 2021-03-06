/* ---------- MODULES ---------- */
const _ = require('lodash');
const auth = require('../middleware/auth');
const express = require('express');
const passport = require('passport');


/* ---------- CLASSES & INSTANCES ---------- */
const router = express.Router();
const User = require('../models/User');

/* ---------- CONSTANTS ---------- */
const DEV_VIEW_MODE = process.env.DEV_VIEW_MODE; // To automatically log in after server refresh
const DEV_USER_ID = process.env.DEV_USER_ID;

/* ---------- FUNCTIONS  ---------- */

/* ---------- INITIALIZATION ---------- */
/* ----- Express ----- */
router.use(function (req, res, next) {
    // Automatically authenticate if dev mode is on.
    if (!req.isAuthenticated() && _.includes(['user', 'admin'], DEV_VIEW_MODE) && DEV_USER_ID) {
        User.findById(DEV_USER_ID, (err, user) => {
            if (err) throw err;

            req.login(user, (err) => {
                if (err) return next(err);

                return next();
            });
        });
    }
    else {
        next();
    }
});

/* ---------- ROUTES ---------- */
// With the middleware, if the user is not authenticated, they will be redirected to the front landing page.
router.get('/', auth.isLoggedIn, (req, res) => {
    res.render('users/dashboard', {user: req.user, flash: req.flash('dashboard')});
});

/* ----- VISITOR ROUTES ----- */
router.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/', failureFlash: 'Incorrect credentials.'}));

router.get('/privacy', (req, res) => {
    res.render('privacy');
});
router.get('/about-us', (req, res) => {
    res.render('about');
});
router.get('/contact-us', (req, res) => {
    res.render('contact');
});

router.get('/tos', (req, res) => {
    res.render('tos');
});

router.get('/products/:cat', (req, res) => {
    res.render('product-listing');
});
router.get('/product-detail/:prodId', (req, res) => {
    res.render('product-detail');
});

router.get('/admin',(req,res)=>{
    res.render('admin');
});

/* ----- USER ROUTES ----- */
router.get('/logout', auth.isAuthenticated, (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/profile', auth.isAuthenticated, (req, res) => {
    res.render('users/profile', {user: req.user});
});

router.get('/settings', auth.isAuthenticated, (req, res) => {
    res.render('users/settings', {user: req.user, flash: req.flash('settings')});
});

// router.get('/sitemap.xml', (req,res) => {
//     const rssFile = fs.readFileSync(__dirname + '/sitemap.xml', { encoding: 'utf8' });
//     console.log('FILE', rssFile);
//     res.set('Content-Type', 'text/xml');
//     res.send(rssFile);
// });

module.exports = router;