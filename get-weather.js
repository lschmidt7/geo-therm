const axios = require('axios')
const api = require('./src/services/api')
const helper = require('./src/helper')

process.argv.splice(0, 2)
const opt = process.argv.join('%20')

if (opt == 'all' || opt == '') {
  axios.get('http://localhost:4000/all_weather').then(res => {
    console.log(res.data)
  })
} else {
  axios.get('http://localhost:4000/weather/' + opt).then(res => {
    console.log(res.data)
  })
}
