const Joi = require('@hapi/joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .default('development'),
    PORT: Joi.number()
        .default(3000),
    PG_HOST: Joi.string().required()
        .description('Postgres DB host url'),
    PG_PORT: Joi.number()
        .default(27017),
    SESSION_SECRET: Joi.string()
}).unknown()
    .required();


const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongo: {
        host: envVars.PG_HOST,
        port: envVars.PG_PORT
    },
    SESSION_SECRET: envVars.SESSION_SECRET
};

module.exports = config;
