

module.exports = function(io) {

    io.sockets.on('connection', function(socket){
        console.log("Users Connected");
        socket.on("connected", (data) => console.log("KLAPPPPPTTTTTTTT"));
        socket.on('update', () => io.emit('update'));
      
    });
};
