const { Pool } = require("pg");

// connect to  db
const pool = new Pool({
    connectionString: process.env.PG_HOST
});

pool.on('connect', () => {
    console.log('connected to the db');
});


module.exports = pool;