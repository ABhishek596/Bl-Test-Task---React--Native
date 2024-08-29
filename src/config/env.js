import { DEVELOPMENT_BACKEND_URL, PRODUCTION_BACKEND_URL } from '@env'

const developmentEnv = {
    DEVELOPMENT_BACKEND_URL,
};
const productionEnv = {
    PRODUCTION_BACKEND_URL,
};

export default __DEV__?developmentEnv:productionEnv;