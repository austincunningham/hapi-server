// hello handler ties back to hello route
exports.hello = {
    handler: function(req, res){
        return 'Hello World from Hapi';
    }
};

// file handler ties back to index route
exports.index = {
    handler: function(req, res){
        //console.log('index');
        return res.file('./app/views/index.html');
    }
};

exports.page1 = {
    handler: function(req, res){
        //console.log('page1');
        return res.file('./app/views/page1.html');
    }
};

exports.servesPublicDirectory = {
    handler: {
        directory: {
            path: 'public',
            listing: true
        }
    }
};
