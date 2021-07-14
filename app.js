const express = require('express')
const app = express()
const router = require('./src/routes')
const logger = require('./src/logger')

require('dotenv').config()

app.use(router)

app.listen(4000, () => {
  logger.info('Iniciando servidor')
})

module.exports = app