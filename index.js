'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const vision = require('vision');
const handlebars = require('handlebars');

require('./app/models/db')

// Create server, with public directory exposed
var server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});



// Starting the hapi server
async function start(){
    // plugin for static web content
    await server.register([Inert,vision]);

    await server.views({
        engines: {
          hbs: handlebars,
        },
        relativeTo: __dirname,
        path: './app/views',
        isCached: false,
      });

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
