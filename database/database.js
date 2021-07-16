const Sequelize = require('sequelize')
const logger = require('../src/logger')

require('dotenv').config()

const db = 'IRRIGA'
const user = process.env.DB_USER
const pass = process.env.DB_PASS

const connection = new Sequelize(db, user, pass, {
  host: 'localhost',
  dialect: 'mysql'
})

connection.authenticate().then(() => {
  logger.info('[DB] banco conectado com sucesso')
})
  .catch(err => {
    logger.error('[DB] problema ao conectar com o banco: ' + err)
  })

module.exports = connection
