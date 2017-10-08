var app = require('express')()
var index = require('./routes/index')

/**
* This file will used for handling Authentication and Routes
* 
*/

app.use('/', index)
module.exports = app