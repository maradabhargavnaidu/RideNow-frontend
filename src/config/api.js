import axios from "axios";
const api = axios.create({
  // baseURL: `https://ridenow-backend.onrender.com`,
  baseURL: `http://localhost:3500`,
});
export default api;