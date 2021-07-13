const axios = require('axios').default

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

api.interceptors.request.use((config) => {
  if (config.method === 'get') {
    config.url = 'weather?q=' + config.url + '&appid=' + process.env.API_WEATHER_KEY
  }
  return config
}, (error) => {
  return error
})

module.exports = api
