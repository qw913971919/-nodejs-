var express = require('express')
var app = express()
var users = require('./user/user.js')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/user', users)
app.listen(3001, () => {
    console.log('服务已开启')
})
