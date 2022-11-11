const MessageRouter = require("./routers/message.router");

module.exports = (app) => {
    app.use('/message', MessageRouter);
}
