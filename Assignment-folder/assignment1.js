const http = require('http');
const fs = require('fs');

var index = fs.readFileSync('assignment1.html');

const requestListener = function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(index);
}

const server = http.createServer(requestListener);

server.listen(8080);
console.log("Server is running on port 8080");