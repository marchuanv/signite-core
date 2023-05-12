const http = require('http');
const server = http.createServer();
server.on('request', (request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('request received.', body);
        response.end('hello world');
    });
});
server.listen(3000);