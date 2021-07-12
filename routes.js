const express = require('express')
const router = express.Router()
const Cities = require('./database/Cities')
const OpenWeatherMapHelper = require('openweathermap-node')

router.get('/cities', (req, res) => {
  Cities.findAll().then(cidades => {
    res.send(cidades)
  })
})

router.get('/data', (req, res) => {
  const helper = new OpenWeatherMapHelper(
    {
      APPID: '9b12c926e2e3d6b81482cf88efc3f15a',
      units: 'metric' // this allow to get temp in Celsius
    }
  )
  helper.getCurrentWeatherByCityName('Paris', (err, currentWeather) => {
    if (err) {
      console.log(err)
    } else {
      console.log(currentWeather)
      res.send(currentWeather)
    }
  })
})

module.exports = router
