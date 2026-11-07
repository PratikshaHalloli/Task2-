const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'UP' }));
    } else if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello! Jenkins CI/CD Pipeline is working.');
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

if (require.main === module) {
    server.listen(PORT, '0.0.0.0', () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = server;
