const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const mongoConnection = callback => {
    mongoClient.connect('mongodb+srv://nkunzi:nkunzi@cluster0.06bhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then((client) => {
        console.log(client)
        callback(client)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = mongoConnection
