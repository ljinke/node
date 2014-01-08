
//socket example

var net = require('net');
var server = net.createServer();
server.on('connection', function(socket) {
	console.log('got a new connection');
	socket.setEncoding("utf8");
	socket.on('data', function(data) {
		console.log('got data:', data);
	});
});
server.on('error', function(err) {
	console.log('Server error:', err.message);
});
server.on('close', function() {
	console.log('Server closed');
});
server.listen(1337);

//test:
//$ telnet localhost 1337