var Server = require('../bin/www').newServer
/**
 * If you had any idea for better development, you can contribute this project
 * Please check a contribution guide for more details
 * -Ade Firman F
*/

/**
 * This file for handling server only. DB Connection or anything else please using index.js 
*/

/**
 * Server will running as dev for default
 * Please see a www.js file for the port & env details
 * Route and Authentication in index.js
*/

Server.app('dev')

/**
 * This is for listening log message
 * You can remove this function 
*/

Server.listening()
