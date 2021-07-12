const connection = require('./database')
const Sequelize = require('sequelize')

const Weather = connection.define('weather', {
  datetime: {
    type: Sequelize.DATE
  },
  temp: {
    type: Sequelize.FLOAT
  },
  temp_min: {
    type: Sequelize.FLOAT
  },
  temp_max: {
    type: Sequelize.FLOAT
  },
  wind_speed: {
    type: Sequelize.FLOAT
  },
  sunrise_hour: {
    type: Sequelize.TIME
  },
  rain_amount_last_hour: {
    type: Sequelize.FLOAT
  }
},
{
  timestamps: false
})

module.exports = Weather
