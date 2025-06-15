import axios from 'axios';
import { baseUrl } from './Constants/constants'; // Make sure the path is correct

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
