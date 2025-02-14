import axios from 'axios';

const api = axios.create({
  baseURL: "https://fast-api-rag.anushchat.dev"
});

export default api;