const app = require('express')()
const index = require('./routes/index')
const config = require('./config/service')
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
 * Welcome message only
 */
app.get('/welcome', (req, res)=>{
	res.json({
		code : 200,
		name : config.name,
		version : config.version
	})
})

/**
 * Showing your token 
 */
app.get('/auth', (req, res)=>{
	if(req.query.secret === config.secret){
		res.json({
			code : 200,
			token : config.token
		})
		return;
	}
	res.json({
		code : 402,
		message : "Wrong secret key"
	})
	return
})
/**
* Error handling
*/
app.use((req, res)=>{
	res.json({
		code : 404,
		message : "Not found"
	})
})

module.exports = app