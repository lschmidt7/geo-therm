const schedule = require('node-schedule')
const logger = require('./logger')
const {registerCitiesWeather} = require('./routines')

const rule = new schedule.RecurrenceRule()
rule.minute = 30

schedule.scheduleJob(rule, async function () {
  logger.info('[AUTOMATICA] pesquisando dados climáticos de todas as cidades')
  await registerCitiesWeather()
})

module.exports = schedule
