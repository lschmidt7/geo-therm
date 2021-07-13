const express = require('express')
const router = express.Router()
const Helper = require('./helper')
const schedule = require('node-schedule')
const logger = require('./logger')

const job = schedule.scheduleJob('* 30 * * * *', async function () {
  logger.info("[AUTOMATICA] tarefa automática: pesquisando dados climáticos de todas as cidades")
  const cidades = await Helper.getAllCitiesName()
  const weathers = await Helper.getAllCitiesWeather(cidades)
})

router.get('/all_weather', async (req, res) => {  
  logger.info("[ROTA] chamada para a rota: " + req.path)
  const cidades = await Helper.getAllCitiesName()
  const weathers = await Helper.getAllCitiesWeather(cidades)
  for (const weather of weathers) {
    Helper.saveWeather(weather)
  }
  res.send(weathers)
})

router.get('/weather/:city', async (req, res) => {
  logger.info("[ROTA] chamada para a rota: " + req.path)
  const weather = await Helper.getWeather(req.params.city)
  Helper.saveWeather(weather)
  res.send(weather)
})

module.exports = router
