const Cities = require('../database/Cities')
const Weather = require('../database/Weather')
const logger = require('./logger')
const api = require('./services/api')
const Util = require('./util')

function saveWeather (weather) {
  logger.info('[DB] armazenando clima no banco')
  Weather.create({
    datetime: Util.unixToDate(weather.dt),
    temp: weather.main.temp,
    temp_min: weather.main.temp_min,
    temp_max: weather.main.temp_max,
    wind_speed: weather.wind.speed,
    sunrise_hour: Util.unixToTime(weather.sys.sunrise),
    rain_amount_last_hour: Util.rainAmount(weather)
  })
}

async function getWeather (cityName) {
  logger.info('[API] chamada para api openweathermap')
  cityName = cityName.split(' ').join('%20')
  cityName = Util.removeAcentos(cityName)
  const res = await api.get(cityName)
  return res.data
}

async function getAllCitiesWeather (cidades) {
  logger.info('requisitando dados climáticos em todas as cidades')
  const weathers = []
  for (const cidade of cidades) {
    const cityName = cidade.dataValues.name
    const weather = await getWeather(cityName)
    weathers.push(weather)
  }
  return weathers
}

function getAllCitiesName () {
  logger.info('[DB] recuperando todas as cidades')
  const cidades = Cities.findAll({
    attributes: ['name']
  })
  return cidades
}

module.exports = { getAllCitiesName, getWeather, getAllCitiesWeather, saveWeather }
