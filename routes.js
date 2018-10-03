const Controller = require('./app/controllers/controller.js');

module.exports = [
    {method: 'GET', path: '/hello', config: Controller.hello },
    {method: 'GET', path: '/', config: Controller.index },
    {method: 'GET', path: '/page1', config: Controller.page1 },
    {method: 'GET', path: '/{param*}', config:{ auth: false}, handler: Controller.servesPublicDirectory}
];