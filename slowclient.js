var fs = require('fs');

require('http').createServer(function(req, res) {
	console.log("request received.")

	var rs = fs.createReadStream('../Dropbox/Deep c&c++.pdf');
	console.log("Opened file.");

	rs.on('data', function(data) {
		//Returns true if the entire data was flushed successfully to the kernel buffer.
		//Returns false if all or part of the data was queued in user memory. 
		//'drain' will be emitted when the buffer is again free. 
		if (!res.write(data)) {
			rs.pause();
			console.log("pause to read file.")
		}
		console.log("respond content.")
	});
	res.on('drain', function() {
		rs.resume();
		console.log("resume data reading.")
	});
	rs.on('end', function() {
		console.log("completed data reading and finished responding.")
		res.end();
	});
}).listen(8080);