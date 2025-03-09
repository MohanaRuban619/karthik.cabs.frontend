import axios from "axios";


const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use(async (req) => {
    if (!req.headers['Content-Type']) {
        req.headers['Content-Type'] = 'application/json';
    }
    console.log("Request Headers:", req.headers);
    return req;
});
export const SEND_MESSAGE = (payload) => API.post('/contact-email',payload);


