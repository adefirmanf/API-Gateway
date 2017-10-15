var Router = require('express').Router()
var proxy = require('express-http-proxy')
var Path = require('../routes.json').routes
var _ = require('lodash')

Path.forEach(function(key){
	Router.use(key.path, function(req, res){
		res.json(key.message)
	})
})

module.exports = Router