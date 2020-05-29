// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo: {
        host: process.env.PG_HOST,
        port: process.env.PG_PORT
    },
    SESSION_SECRET: process.env.SESSION_SECRET
};

module.exports = config;
