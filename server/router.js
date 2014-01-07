function route(handle, pathname) {
	console.log("Router: About to route a request for " + pathname);
	
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		console.log("Router:No request handler found for " + pathname);
		return "404 Not found";
	}
}
exports.route = route;
