'use strict';

const http = require('http');
const config = require('config');

const ip = config.get('ip');
const port = config.get('port') ;
const channel = config.get('channel') ;

const url = `https://telegram.me/${channel}`;

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`This is Sinfest bot on <a href = '${url}'>${url}</a>`)
});

server.listen(port);

console.log(`Server listening at http://${ip}:${port}/`);