const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
app.use(cors())
app.use(bodyParser.json())


const postRouter = require('./apiRoutes/crud_route')


app.use('/api',postRouter)

module.exports = app

