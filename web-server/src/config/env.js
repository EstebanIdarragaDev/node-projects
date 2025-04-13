// configuracion de variables de entorno

const { get } = require('env-var');
const dotenv = require('dotenv');
dotenv.config(); // Cargo las variables de enntorno

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = envs;