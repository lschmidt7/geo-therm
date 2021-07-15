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

async function saveWeathers (weathers) {
  for (const weather of weathers) {
    await saveWeather(weather)
  }
}

async function getCityWeather (cityName) {
  logger.info('[API] chamada para api openweathermap')
  cityName = Util.formatCityName(cityName)
  const res = await api.get(cityName)
  return res.data
}

async function getCitiesWeather (cidades) {
  logger.info('requisitando dados climáticos em todas as cidades')
  const weathers = []
  for (const cidade of cidades) {
    const cityName = cidade.dataValues.name
    const weather = await getCityWeather(cityName)
    weathers.push(weather)
  }
  return weathers
}

function getCitiesName () {
  logger.info('[DB] recuperando todas as cidades')
  const cidades = Cities.findAll({
    attributes: ['name']
  })
  return cidades
}

async function registerCityWeather (city) {
  const weather = await getCityWeather(city)
  saveWeather(weather)
  return weather
}

async function registerCitiesWeather () {
  const cidades = await getCitiesName()
  const weathers = await getCitiesWeather(cidades)
  saveWeathers(weathers)
  return weathers
}

module.exports = { getCitiesName, getCityWeather, getCitiesWeather, saveWeather, saveWeathers, registerCityWeather, registerCitiesWeather }
