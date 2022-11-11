const express = require('express')
const initRoutes = require('./routes')

const app = express()
app.use(express.json())

initRoutes(app)

module.exports = app
