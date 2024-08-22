import axios from 'axios';

export const $host = axios.create({
  baseURL: import.meta.env.PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
