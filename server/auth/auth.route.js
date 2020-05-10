const express = require('express');
const { check, validationResult } = require('express-validator');
const authCtrl = require('./auth.controller');
const passport = require('passport');
const bcrypt = require('bcrypt');


const router = express.Router(); // eslint-disable-line new-cap

/** /api/auth/login */
router.route('/login')
    .post( passport.authenticate('local'),
        function(req, res) {
            res.send(req.user);
        });

/** /api/auth/register  */
router.route('/register')
    .post(authCtrl.create);

/** /api/auth/logout  */
router.route('/logout')
    .delete((req, res) => {
        req.logOut();
        res.redirect('/api/auth/login')
      });

module.exports = router;

