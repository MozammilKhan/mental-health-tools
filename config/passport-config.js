const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../db');

async function authenticateUser (user_id, password, done)  {
    try{
        let  result = await (db.query("SELECT * FROM account WHERE user_id=$1",
            [user_id]));
        if(result.rowCount > 0){
            let user = result.rows[0];
            const match = await bcrypt.compare(password, user.password);
            console.log("match", match);
            if (match) {
                console.log("here");
                return done(null, user)
            } else {
                console.log("there");
                return done(null, false, {message: 'Password incorrect'})
            }
        } else{
            return done(null, false, {message: 'No user with user_id'})
        }
    } catch {
        console.log("here too");
        return done(null, false, {message: 'No user with user_id'})
    }
}

passport.use(new LocalStrategy({ usernameField: 'user_id' }, authenticateUser));

passport.serializeUser((user, done) => done(null, user.user_id));


passport.deserializeUser((id, done) => {
    db.query('SELECT * FROM account WHERE user_id=$1', [id], (err, results) => {
      if(err) {
        return done(err)
      }
      done(null, results.rows[0])
    })
  });

module.exports = passport;
