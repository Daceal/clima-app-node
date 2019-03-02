const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cab98d90f2fb7375e9f1dbc88a1f9e5f`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}