const Router = require('express').Router()
const proxy = require('express-http-proxy')
const client = require('../lib/api')

const opt = {
	proxyReqOptDecorator : function(proxyReqOpts, srcReq){
		proxyReqOpts.headers['Content-Type'] = 'application/json';
		return proxyReqOpts;
	}
}

client().then((src)=>{
	src.forEach(function(key){
		let url = key._source.url;
		let target = key._source.target
		Router.use(url, proxy(target, opt))
	})
}).catch((err)=>{
	console.log(err)
})

module.exports = Router