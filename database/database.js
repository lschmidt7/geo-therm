const Sequelize = require('sequelize')

db = 'IRRIGA'
user = 'root'
pass = 'geo-therm1402'

const connection = new Sequelize(db, user, pass, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection
