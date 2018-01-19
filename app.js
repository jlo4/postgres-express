const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')


const app = express()

//Log requests to conole
app.use(logger('dev'))

//Parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Require routes into the application, before the catch-all route
require('./server/routes')(app)
//Catch-all route sends back welcome message in json
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning.'
}))

module.exports = app
