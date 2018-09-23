// hello handler ties back to hello route
exports.hello = {
    handler: function(req, res){
        return 'Hello World from Hapi';
    }
};

// file handler ties back to index route
exports.index = {
    handler: function(req, res){
        return res.file('hello.html');
    }
};

exports.filename = {
        handler: {
            file: function(req, res){
            return req.params.filename;
        }
    }
};