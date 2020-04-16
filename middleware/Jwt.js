var exports = module.exports = {}
const jwt   = require('jsonwebtoken')
const config    = require('../config/config.js')

exports.secret  = (req, res, next) => {
    res.secret  = config.secret
    next()
}

exports.validateToken   = async(req, res, next) => {
    let result  = {status: false, message: ''}
    const tokens    = req.headers.authorization
    if (tokens) {
        let tokenSplit  = tokens.split(" ")
        let pureToken   = tokenSplit[1]
        jwt.verify(pureToken, res.secret, function(err, decoded) {
            if (err) {
                result.message  = 'Token is Invalid'
                return res.json(res)
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        result.message  = 'No token provided'
        return res.status(403).send(result)
    }
}