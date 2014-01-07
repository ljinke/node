var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Server: Request for " + pathname + " received.");

		var content = route(handle, pathname);

		console.log("Server: response: " + content);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(content);
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server: Server has started.");
}
exports.start = start;
