const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
server.on('request', (request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        body = [];
        console.log('request received: ', bodyStr);
        console.log('request path: ', request.url);
        if (request.url === '/') {
            response.setHeader('content-type', 'text/html');
            const indexHtmlStr = fs.readFileSync(path.join(__dirname, 'index.html'));
            response.statusMessage = 'Success';
            response.statusCode = 200;
            return response.end(indexHtmlStr);
        }
        const resourcePath = path.join(__dirname, request.url);
        if (fs.existsSync(resourcePath)) {
            response.setHeader('content-type', 'application/javascript');
            const indexHtmlStr = fs.readFileSync(resourcePath);
            response.statusMessage = 'Success';
            response.statusCode = 200;
            response.end(indexHtmlStr);
        } else {
            response.setHeader('content-type', 'text/plain');
            response.statusMessage = 'Not Found';
            response.statusCode = 404;
            response.end('404 Not Found');
        }
    });
});
server.listen(3000);