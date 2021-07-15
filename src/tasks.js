const schedule = require('node-schedule')
const logger = require('./logger')
const Helper = require('./helper')

schedule.scheduleJob('* 30 * * * *', async function () {
  logger.info('[AUTOMATICA] pesquisando dados climáticos de todas as cidades')
  const cidades = await Helper.getAllCitiesName()
  const weathers = await Helper.getAllCitiesWeather(cidades)
  Helper.saveWeathers(weathers)
})

module.exports = schedule
