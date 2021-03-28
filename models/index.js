const mongoose = require('mongoose')

const Schema = mongoose.Schema

const botSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    feeling: {
        type: String,
        required: true
    },
    freeDay: {
        type: String,
        required: true
    },
    freeTime: {
        type: String,
        required: true
    },
    hobbies: {
        type: String
    },
    digits: {
        type: Number
    }

})

module.exports = mongoose.model('Bot', botSchema)
