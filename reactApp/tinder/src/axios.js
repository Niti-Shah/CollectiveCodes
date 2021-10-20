import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-backend-niti.herokuapp.com",
});

export default instance;