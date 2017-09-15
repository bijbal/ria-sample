var httpServer = require('../node_modules/http-server/lib/http-server'),
director = require('../node_modules/director');


var options = {

    before: [
        function (req, res) {
            var found = router.dispatch(req, res);
            if (!found) {
                res.emit('next');
            }
        }
    ]
};

var router = new director.http.Router();
var server = httpServer.createServer(options);
var port = '3030';
var host = 'localhost';
server.listen(port, host, function() {
    var uri = [false ? 'https' : 'http', '://', host, ':', port].join('');
    console.log('Starting up http-server, serving ');

    console.log('Hit CTRL-C to stop the server');
});