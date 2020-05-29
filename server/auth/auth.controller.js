const db = require('../../db');
const bcrypt = require('bcrypt');


async function create(req, res, next) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const result = await db.query(
            "INSERT INTO account (user_id, password, email, last_name, first_name) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [req.body.user_id, hashedPassword, req.body.email, req.body.last_name, req.body.first_name]
        );
        console.log(result.rows[0]);
        return next()
    } catch (err) {
        res.redirect('/api/auth/register');
        return next(err);
    }
}

module.exports = {create};
