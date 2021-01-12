import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(undefined, error => {
    return Promise.reject(error);
});

export default axios;