var Router = require('express').Router()
var proxy = require('express-http-proxy')

Router.get('/', function(req, res, next){
	res.json("Hello world")
})

module.exports = Router