const config = require('config')
const mongoose = require('mongoose')

require('./models/Message.model')

const app = require('./server')

async function listen() {
    const port = config.app.port || 4040;
    app.listen(config.app.port || 4040, () => {
        console.log(`server listening... http://localhost:${port}`)
    })
}

function connect() {
    mongoose.connection
        .on('error', console.log)
        .on('disconnected', connect)
        .once('open', listen)
    mongoose.connect(config.mongodb.url, config.mongodb.config)
}

connect()
