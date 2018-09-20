'use strict';

const Hapi = require('hapi');

// Create
var server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});

// route
server.route(require('./routes'));

// Starting the hapi server
async function start(){
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
process.on('SIGINT', function () {  
    console.log('stopping hapi server')
  
    server.stop({ timeout: 10000 }).then(function (err) {
      console.log('hapi server stopped')
      process.exit((err) ? 1 : 0)
    })
  });
