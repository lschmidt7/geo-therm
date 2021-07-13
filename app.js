const express = require('express')
const app = express()
const router = require('./src/routes')

require('dotenv').config()

app.use(router)

app.listen(4000)
