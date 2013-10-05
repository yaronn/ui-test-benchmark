var restify = require('restify');

function add(req, res, next) {
  var val = parseInt(req.params.x) + parseInt(req.params.y)
  console.log(req.params.x + "+" + req.params.y + "=" + val)
  res.send({res: val});
}

var server = restify.createServer();
server.get('/add/:x/:y', add);

server.get(/\/docs\/?.*/, restify.serveStatic({
  directory: './public'
}));

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});