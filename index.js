'use strict';

const Hapi = require('hapi');

// Create
var server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});



// Starting the hapi server
async function start(){
    // middleware for static web content
    await server.register(require('inert'));

    // route
    server.route(require('./routes'));
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server listening at:', server.info.uri);
};

start();

// Stopping Hapi server gracefully
process.on('unhandledRejection', function (err) {  
    console.log('stopping hapi server')
  
    server.stop({ timeout: 10000 }).then(function (err) {
      console.log('hapi server stopped')
      process.exit(1);
    })
  });
