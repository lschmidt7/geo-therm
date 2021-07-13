const Cities = require('../database/Cities')
const api = require('./services/api')

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

module.exports = { getAllCitiesName, getWeather, getAllCitiesWeather }
