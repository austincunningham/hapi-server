const Controller = require('./controller.js');

module.exports = [
    {method: 'GET', path: '/hello', config: Controller.hello },
    {method: 'GET', path: '/', config: Controller.index }
];