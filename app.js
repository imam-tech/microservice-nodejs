const express   = require('express')
const app       = express()
const http      = require('http')
const middleware    = require('./middleware/Jwt')

const server    = http.createServer(app)
app.use(middleware.secret)
app.use(middleware.validateToken)
server.listen(5000)

let route   = require('./route/index')
app.use(route.welcome)
module.exports  = app