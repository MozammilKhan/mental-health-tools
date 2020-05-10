const db = require('../../db');

/**
 * Load user and append to req.
 */
async function load(req, res, next, id) {
    try {
        const result = await db.query("SELECT * FROM account WHERE user_id=$1",
            [id]);
        req.user = result.rows[0];
        next();
    } catch (err) {
        return next(err);
    }
}

/**
 * Get user
 * @returns {User}
 */
async function get(req, res) {
    return res.json(req.user);
}


/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
async function update(req, res, next) {
    try {
        const result = await db.query(
            "UPDATE account SET email=$2, last_name=$3, first_name=$4 WHERE user_id=$1 RETURNING *",
            [req.user.user_id, req.body.email, req.body.last, req.body.first]
        );
        return res.json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
async function list(req, res, next) {
    try {
        const results = await db.query("SELECT * FROM account");
        return res.json(results.rows);
    } catch (err) {
        return next(err);
    }
}

/**
 * Delete user.
 * @returns {User}
 */
async function remove(req, res, next) {
    try {
        await db.query("DELETE FROM account WHERE user_id=$1",
            [req.user.user_id]);
        return res.json({ message: "Deleted" });
    } catch (err) {
        return next(err);
    }
}



module.exports = { load, get, update, list, remove};
