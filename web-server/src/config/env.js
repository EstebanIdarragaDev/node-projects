// configuracion de variables de entorno
import envvar from 'env-var'
import env from 'dotenv';
env.config(); // Cargo las variables de enntorno

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

