import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://192.168.1.218:3333',
    timeout: 1000,
});