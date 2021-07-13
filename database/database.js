const Sequelize = require('sequelize')

const db = 'IRRIGA'
const user = 'root'
const pass = 'geo-therm1402'

const connection = new Sequelize(db, user, pass, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection
