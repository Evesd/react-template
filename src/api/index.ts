import axios from 'axios';

const AUTH_HEADER = 'Authorization';
const BASE_URL = '/api/v1';
const TIMEOUT = 10000;
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers[AUTH_HEADER] = token;
    }
    return config;
  },
  (error) => {
    console.log('request error');
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const response = error.response;
    console.log('error response');
    console.log(response);
    return Promise.reject(error);
  }
);

export default instance;
