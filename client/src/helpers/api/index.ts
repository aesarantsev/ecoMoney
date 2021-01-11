import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api';
axios.defaults.withCredentials = true;

export default axios;