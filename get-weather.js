const axios = require('axios')

process.argv.splice(0, 2);
const opt = process.argv.join(' ')

if(opt == 'all' || opt == ''){
    axios.get('http://localhost:4000/all_weather').then(res => {
        console.log(res.data)
    })
}
else{
    axios.get('http://localhost:4000/weather/'+opt).then(res => {
        console.log(res.data)
    })
}