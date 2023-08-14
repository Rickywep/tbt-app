import axios from 'axios';

export const punkApi = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});
