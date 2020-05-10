const express = require('express');
const { check, validationResult } = require('express-validator');
const authCtrl = require('./auth.controller');
const passport = require('passport');
const bcrypt = require('bcrypt');


const router = express.Router(); // eslint-disable-line new-cap

/** /api/auth/login */
router.route('/login')
    .get((req, res) => {
            res.render('login.ejs')
        }
    )

    .post(passport.authenticate('local', {
        successRedirect: '/api/health-check',
        failureRedirect: '/api/auth/login',
        failureFlash: true
    }));


/** /api/auth/register  */
router.route('/register')
    .get((req, res) => {
            res.render('register.ejs')
        }
    )
    .post(authCtrl.create);

/** /api/auth/logout  */
router.route('/logout')
    .delete((req, res) => {
        req.logOut();
        res.redirect('/api/auth/login')
      });



module.exports = router;

