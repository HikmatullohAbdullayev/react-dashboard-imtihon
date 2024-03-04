import axios from "axios";
export const request = axios.create({
    baseURL: 'https://testserver-ql7j.onrender.com',
  });
// export const BASE_URL = "https://testserver-ql7j.onrender.com"