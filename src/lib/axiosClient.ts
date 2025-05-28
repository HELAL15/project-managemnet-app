// lib/axiosClient.ts
import { BASE_URL } from '@/constants';
import axios from 'axios';
import Cookies from 'js-cookie';


const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'Accept-Language': LANG,
    // Lang: LANG,
  },
});

axiosClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = Cookies.get('access_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
   
    return Promise.reject(error);
  }
);

export default axiosClient;
