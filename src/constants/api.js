var axios = require('axios');

export const BASE_URL = "";

export const GATOAPI = axios.create({
    baseURL: "https://catfact.ninja/",
});

