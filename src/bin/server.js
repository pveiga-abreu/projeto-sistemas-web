const app = require('../app');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

console.log(`Listening ${port} port`);
server.listen(port);

function normalizePort(value) {
	var port = parseInt(value, 10);

	if (isNaN(port)) {
	return value;
	}

	if (port >= 0) {
	return port;
	}

	return false;
}
