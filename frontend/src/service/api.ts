import axios from 'axios';

const AUTH_TOKEN = '2902f28cfd73b2136020cc4f1b89ad9c';

const instance = axios.create({
  // baseURL: ' https://localhost:7042',
});

instance.defaults.headers['api_key'] = AUTH_TOKEN;

export default instance;
