import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: `https://spodium-support.onrender.com`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  