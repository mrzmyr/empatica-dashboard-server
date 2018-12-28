const express = require('express')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')

const app = express()
const dev = process.env.NODE_ENV !== 'production'

app.use(compression())
app.use(cors())
app.use(helmet())
app.disable('x-powered-by')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', require('./routes'))

module.exports = app;
