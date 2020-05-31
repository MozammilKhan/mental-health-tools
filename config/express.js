const express = require('express');
const logger = require('morgan');
const cors = require('cors');
// const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

const bodyParser = require('body-parser');

const routes = require('../index.route');
const config = require('./config');
const passport  = require('./passport-config');

const app = express();


// Log requests to the console.
if (config.env === 'development') {
    app.use(logger('dev'));
}

app.use(session({ secret: "secret-key", resave: false,  saveUninitialized: false}));
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));


app.use(express.json());

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
app.use('/', routes);

module.exports = app;
