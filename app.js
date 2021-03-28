const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const botRoute = require('./routes')

app.use('/api/slack-bot', botRoute)

mongoose.connect('mongodb+srv://nkunzi:nkunzi@cluster0.06bhy.mongodb.net/slackbot?retryWrites=true&w=majority', { useUnifiedTopology: true }, { useNewUrlParser: true }).then(() => {
    app.listen(3000)
}).catch(err => {
    console.log(err)
})
