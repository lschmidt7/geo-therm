const Sequelize = require('sequelize')
const connection = require('./database')

const Cities = connection.define('cities', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  latitude: {
    type: Sequelize.STRING
  },
  longitude: {
    type: Sequelize.STRING
  },
  gmt: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
{
  timestamps: false
})

module.exports = Cities
