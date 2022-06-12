import axios from 'axios'
//Cấu hình các hằng số của hệ thống 

//domain backend
export const DOMAIN = 'https://movienew.cybersoft.edu.vn';
export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiIgSmF2YSAxNyIsIkhldEhhblN0cmluZyI6IjI4LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MjE4NTYwMDAwMCIsIm5iZiI6MTY0ODY1OTYwMCwiZXhwIjoxNjcyMzMzMjAwfQ.ZPHRieXZ4lo1gS8n_8hr2L2t6c5fI4vZaAbSKADsCH0';

export const USER_LOGIN = 'userLogin';
export const ACCESSTOKEN = 'accessToken';


//config axios 
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        ['TokenCybersoft']: TOKEN_CYBERSOFT,
        ['Authorization']: 'Bearer ' + localStorage.getItem(ACCESSTOKEN)
    }
    return config;
}, (errors) => {
    return Promise.reject(errors)
})