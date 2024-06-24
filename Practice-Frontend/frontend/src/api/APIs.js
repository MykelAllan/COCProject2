import axios from './axios';

const APIs = {
    fetchHello: () => {
        return axios.get('/api/hello')
            .then(response => response.data)
            .catch(err => {
                throw err;
            })
    },

    fetchUsers: () => {
        return axios.get('/api/users')
            .then(response => response.data)
            .catch(err => {
                throw err;
            })
    }
}

export default APIs;