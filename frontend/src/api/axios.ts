import axios, { AxiosRequestConfig, AxiosHeaders } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = window.localStorage.getItem('token');
      if (token) {
        config.headers = config.headers || new AxiosHeaders();
        config.headers.set('Authorization', `Bearer ${token}`);
      }
    }
  } catch (e) {
  }
  return config;
});

export default api;
