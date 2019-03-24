var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/client/index.html'));
  //__dirname : It will resolve to your project folder.
});

var server = http.Server(app);
var socket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

// The event will be called when a client is connected.
socket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
});