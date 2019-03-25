

module.exports = function(io) {

    io.sockets.on('connection', function(socket){//Hier kann man auch den client �bergeben
      
        console.log("Users Connected");
      
    });
};
