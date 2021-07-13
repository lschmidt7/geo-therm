const express = require('express')
const router = express.Router()
const Helper = require('./helper')

const schedule = require('node-schedule')

// const job = schedule.scheduleJob('30 * * * * *', async function () {
//   const cidades = await Helper.getAllCitiesName()
//   const weathers = await Helper.getAllCitiesWeather(cidades)
//   console.log(weathers)
// })

router.get('/all_weather', async (req, res) => {
  const cidades = await Helper.getAllCitiesName()
  const weathers = await Helper.getAllCitiesWeather(cidades)
  res.send(weathers)
})

router.get('/cities', async (req, res) => {
  const cidades = await Helper.getAllCitiesName()
  res.send(cidades)
})

router.get('/weather/:city', async (req, res) => {
  const weather = await Helper.getWeather(req.params.city)
  res.send(weather)
})

module.exports = router
