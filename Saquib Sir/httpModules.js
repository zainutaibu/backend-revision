// Example of HTTP Module
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fs.readFileSync('index.html'));
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to About Page</h1>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
