//use pipe in nodejs to resove slow client problem.
require('http').createServer(function(req, res) {
	var rs = require('fs').createReadStream('../Dropbox/Deep c&c++.pdf');
	rs.pipe(res, { end: false });
	rs.on('end', function() {
		res.write("And that's all, folks!");
		res.end();
	});
}).listen(8080);