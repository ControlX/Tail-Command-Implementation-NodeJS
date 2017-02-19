var socketio = require('socket.io');
var http = require('http');
var io = socketio.listen(app);
var fs = require("fs");
var express = require('express'),
app = express();

app.set('port', process.env.PORT || 3300);
   app.set('views', __dirname + '/views');
   //app = config(app);

   app.get('/', function(req, res){
var filePath = 'log.txt';
var file = fs.readFileSync(filePath);

fs.watchFile(filePath, function() {
    file = fs.readFileSync(filePath);
    io.sockets.on('connection', function(socket) {
      socket.emit('ping result', {
        data: data.toString()
      });
    });
});
});
      http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(3300);
