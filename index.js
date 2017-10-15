var app = require('express')()
var request = require('request')
var index = require('./routes/index')
/**
* This file will used for handling Authentication and Routes
* 
*/



/**
* For handling request, I'm using reqest library.
* No proxying. Just for monitoring external source 
* You can edit as you want.
*/

app.use('/', index)

/**
* Error handling
*/
app.use(function(req, res){
	res.json("not found")
	return
})

module.exports = app