const Sequelize = require('sequelize')
const logger = require('../src/logger')

const db = 'IRRIGA'
const user = 'root'
const pass = 'geo-therm1402'

const connection = new Sequelize(db, user, pass, {
  host: 'localhost',
  dialect: 'mysql'
})

connection.authenticate().then(() => {
  logger.info("[DB] banco conectado com sucesso")
})
.catch(err => {
  logger.error('[DB] problema ao conectar com o banco: ' + err);
});


module.exports = connection
