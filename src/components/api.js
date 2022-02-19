const axios = require("axios");

const api = axios.create({
    baseURL: "https://polar-depths-85779.herokuapp.com/apiv1/"
})

export default api;