const schedule = require('node-schedule')
const logger = require('./logger')
const Helper = require('./helper')

const rule = new schedule.RecurrenceRule()
rule.minute = 30

schedule.scheduleJob(rule, async function () {
  logger.info('[AUTOMATICA] pesquisando dados climáticos de todas as cidades')
  await Helper.registerCitiesWeather()
})

module.exports = schedule
