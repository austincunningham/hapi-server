'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');

// Create server, with public directory exposed
var server = new Hapi.Server({
    host: 'localhost',
    port: 3000//, 
    //routes: {files:{relativeTo: Path.join(__dirname, 'public')}}
});



// Starting the hapi server
async function start(){
    // plugin for static web content
    await server.register(Inert);

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
