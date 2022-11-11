const jwt = require('jsonwebtoken')
const config = require('config')

const validateJwt = async (req, res, next) => {
    // get auth token from header
    const authHeader = req.headers.authorization
    const token = authHeader.split('Bearer ')[1]

    try {
        const result = await jwt.verify(token, config.jwt.secret)
        res.locals.user = result
        next()
    } catch (error) {
        return res.status(401).send('Unauthorized')
    }
}

module.exports = {
    validateJwt
}