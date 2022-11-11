
const MessageRouter = require('express').Router()
const { sayHello} = require('../controllers/messsage.controller')

MessageRouter.get('/hello', async (req, res) => {
    const message = sayHello()

    res.json(message)
})

module.exports = MessageRouter