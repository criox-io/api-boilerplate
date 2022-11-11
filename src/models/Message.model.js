const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    from: { type: String },
})

mongoose.model('Message', MessageSchema)

module.exports = {
    MessageSchema
}