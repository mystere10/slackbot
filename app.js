const express = require('express')
const bodyParser = require('body-parser')
const mongoConnection = require('./util/database')

const app = express()

mongoConnection(client => {
    app.listen(3000)
})
