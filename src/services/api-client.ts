import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4acb02ef3e474e38863a8ab4a4de9035'
    }
})