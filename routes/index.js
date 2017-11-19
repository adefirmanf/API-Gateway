const Router = require('express').Router()
const proxy = require('express-http-proxy')
const client = require('../lib/api')

client().then((msg)=>{
	msg.forEach(function(key){
		let url = key._source.url;
		let target = key._source.target
			Router.use(url, (req, res)=>{
				res.json(target)
			})
	})
}).catch((err)=>{
	console.log(err)
})

module.exports = Router