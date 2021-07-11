const Sequelize = require('sequelize')

const connection = new Sequelize('IRRIGA', 'root', 'geo-therm1402', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection
