const Router = require('express').Router()
const proxy = require('express-http-proxy')
const Path = require('../routes.json').routes
const _ = require('lodash')

Path.forEach(function(key){
	Router.use(key.path, function(req, res){
		res.json(key.message)
	})
})

module.exports = Router