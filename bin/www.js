const app = require('../index')
const http = require('http')
/**
* Q : Why using prototype method?
* A : I don't know when i must using closure function or prototype function.
*     The best what i can do just make the code running for first 
*/

function Server(){}

Server.prototype.app = function(env){
	let port;
/**
* You can customize a port whatever you want and also the argument name
*/
	switch(env){
		case 'dev' : 
			port = '3000'
			break;
		case 'production' : 
			port = '27107'
			break;
		default : 
			console.log("False argument")
			return
	}
	app.set('port', port)
	app.listen(port)
}

Server.prototype.listening = function(){
	let port = app.get('port')
	console.log(`Port is listening on ${port}`)
}

var newServer = new Server()

module.exports = {
	newServer : newServer
}