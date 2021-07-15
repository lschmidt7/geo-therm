const axios = require('axios')
const { formatArgs } = require('./src/util')

const city = formatArgs(process.argv)

if (city === 'all' || city === '') {
  axios.get('http://localhost:4000/all_weather')
} else {
  axios.get('http://localhost:4000/weather/' + city)
}
