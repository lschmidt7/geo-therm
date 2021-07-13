const Cities = require('../database/Cities')
const Weather = require('../database/Weather')
const api = require('./services/api')

function testSave () {
  Weather.create({
    datetime: '2014-01-01 00:00:00',
    temp: 15,
    temp_min: 10,
    temp_max: 25,
    wind_speed: 5.4,
    sunrise_hour: '00:00:00',
    rain_amount_last_hour: 8.5
  })
}

function saveWeather (weather) {
  const date = new Date(weather.dt * 1000)
  // Hours part from the timestamp
  const hours = date.getHours()
  // Minutes part from the timestamp
  const minutes = '0' + date.getMinutes()
  // Seconds part from the timestamp
  const seconds = '0' + date.getSeconds()

  // Will display time in 10:30:23 format
  const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

  console.log(formattedTime)
}

async function getWeather (city) {
  const res = await api.get(city)
  return res.data
}

async function getAllCitiesWeather (cidades) {
  const weathers = []
  for (const cidade of cidades) {
    let cityName = cidade.dataValues.name
    cityName = cityName.replace(' ', '%20')
    cityName = cityName.replace('ê', 'e')
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

module.exports = { getAllCitiesName, getWeather, getAllCitiesWeather, saveWeather, testSave }
