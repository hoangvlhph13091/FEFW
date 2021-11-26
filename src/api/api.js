import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://618e0576fe09aa00174409a8.mockapi.io',
  
  headers: {
    'Content-Type': 'application/json',
  },
});