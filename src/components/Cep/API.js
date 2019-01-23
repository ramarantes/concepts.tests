import axios from 'axios';

export default axios.create({
    baseURL:'http://lojaqagera.racco.com/api'
    // headers: {
    //     Authorization: 'Client-ID 2c31d64843d4e5e1bd4163ab101e32996e419f2745b5768da84b3013168d7bff' 
    // }
});
