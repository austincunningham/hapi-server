// exports.hello = {
//     handler: function(req, res){
//         return 'Hello World from Hapi';
//     }
// };

// file handler
exports.index = {
    handler: function(req, h){
        return h.file('./public/index.html');
    }
}