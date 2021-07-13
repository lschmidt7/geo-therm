const Cities = require('../database/Cities')
const Weather = require('../database/Weather')
const api = require('./services/api')
const Util = require('./util')

function saveWeather (weather) {
  Weather.create({
    datetime: Util.unixToDate(weather.dt),
    temp: weather.main.temp,
    temp_min: weather.main.temp_min,
    temp_max: weather.main.temp_max,
    wind_speed: weather.wind.speed,
    sunrise_hour: Util.unixToDate(weather.sys.sunrise),
    rain_amount_last_hour: 0
  })
}

async function getWeather (cityName) {
  cityName = cityName.split(' ').join('%20')
  cityName = Util.removeAcentos(cityName)
  const res = await api.get(cityName)
  return res.data
}

async function getAllCitiesWeather (cidades) {
  const weathers = []
  for (const cidade of cidades) {
    let cityName = cidade.dataValues.name
    const weather = await getWeather(cityName)
    weathers.push(weather)
  }
  return weathers
}

function getAllCitiesName () {
  const cidades = Cities.findAll({
    attributes: ['name']
  })
  return cidades
}

module.exports = { getAllCitiesName, getWeather, getAllCitiesWeather, saveWeather }
