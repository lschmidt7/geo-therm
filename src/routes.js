const express = require('express')
const router = express.Router()
const Helper = require('./helper')
const logger = require('./logger')

router.get('/all_weather', async (req, res) => {
  logger.info('[ROTA] chamada para a rota: ' + req.path)
  const weathers = await Helper.registerCitiesWeather()
  res.send(weathers)
})

router.get('/weather/:city', async (req, res) => {
  logger.info('[ROTA] chamada para a rota: ' + req.path)
  const weather = await Helper.registerCityWeather(req.params.city)
  res.send(weather)
})

module.exports = router
