const express = require('express')
const router = express.Router()
const Helper = require('./helper')
const logger = require('./logger')

router.get('/all_weather', async (req, res) => {
  logger.info('[ROTA] chamada para a rota: ' + req.path)
  const cidades = await Helper.getAllCitiesName()
  const weathers = await Helper.getAllCitiesWeather(cidades)
  Helper.saveWeathers(weathers)
  res.send(weathers)
})

router.get('/weather/:city', async (req, res) => {
  logger.info('[ROTA] chamada para a rota: ' + req.path)
  const weather = await Helper.getCityWeather(req.params.city)
  Helper.saveWeather(weather)
  res.send(weather)
})

module.exports = router
