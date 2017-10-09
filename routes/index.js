var Router = require('express').Router()
var proxy = require('express-http-proxy')
var json = require('../routes.json')
var _ = require('lodash')

Router.get('/:routePath', function(req, res, next){
	var path = _.find(json.routes, {'path' : `/${req.params.routePath}`})
	
	if (typeof path == 'undefined'){
		res.json({err : {"code" : 404, "message" : "Not found"}})
		return
	}
	res.json(path.message)
})


module.exports = Router