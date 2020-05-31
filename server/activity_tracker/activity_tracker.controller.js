const db = require('../../db');


async function loaddata(req, res, next) {
    try {
        const result = await db.query("SELECT * FROM plan WHERE plan_id=$1",
            [req.user.user_id]);
        if (result.rows.length === 0) {
            return res.json("None");
        } else if (result.rows.length === 1) {
            return res.json(result.rows);
        }
        next();
    } catch (err) {
        return next(err);
    }
}

async function loadday(req, res, next) {
    try {
        const result = await db.query("SELECT * FROM plan WHERE plan_id=$1 and date=$2",
        [req.user.user_id, req.params.date]);
        if (result.rows.length === 0) {
            return res.json("None");
        } else if (result.rows.length === 1) {
            return res.json(result.rows[0]);
        }
        next();
    } catch (err) {
        return next(err);
    }
}

async function addday(req, res, next){
    try{
        const result = await db.query("INSERT INTO plan (plan_id, date, early_morning, late_morning, early_afternoon, late_afternoon, evening, night) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [req.user.user_id, req.params.date, req.body.early_morning, req.body.late_morning, req.body.early_afternoon, req.body.late_afternoon, req.body.evening, req.body.night]);
    } catch (e) {
        return next(e);
    }
}


async function changeday(req, res) {
    return;
}



module.exports = {loaddata, loadday, addday, changeday};


