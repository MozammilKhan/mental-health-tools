const db = require('../../db');
const bcrypt = require('bcrypt');

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
async function create(req, res, next) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const result = await db.query(
            "INSERT INTO account (user_id, password, email, last_name, first_name) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [req.body.user_id, hashedPassword, req.body.email, req.body.last_name, req.body.first_name]
        );
        console.log(result.rows[0]);
        res.redirect('/api/auth/login');
        return next()
    } catch (err) {
        res.redirect('/api/auth/register');
        return next(err);
    }
}

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        // res.render('index.ejs', { name: req.user.user_id });
        return next()
    }

    res.redirect('login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}


module.exports = {login, create, checkAuthenticated, checkNotAuthenticated};
