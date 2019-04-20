const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const app = express();

const privateKey = fs.readFileSync('https/localhost-privateKey.key', 'utf8');
const certificate = fs.readFileSync('https/localhost.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

// ...

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
httpServer.listen(8080, () => {
    console.log("HTTP server is running on http://localhost:8080");
});
httpsServer.listen(443, () => {
    console.log("HTTPS server is running on https://localhost:443");
});