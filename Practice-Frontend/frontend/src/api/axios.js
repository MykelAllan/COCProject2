import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://practice-backend-mykel.vercel.app',

    //headers if needed
})

export default instance;