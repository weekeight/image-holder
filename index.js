'use strict';

const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

let port = process.env.PORT || 3000;
server.listen(port);
console.log('Server started! It\'s listening on port %s', port);

app.use('/', function(req, res){
	let reqPath = req.path;
	console.log(reqPath);
	let width = reqPath.split('x')[0];
	let height = reqPath.split('x')[1];

	if(!width || !height){
		res.send('参数不正确...');
		return;
	}

	res.type('image/svg+xml');
	res.send(`
		<svg height="200" width="200">
			<rect width="200" height="200" style="fill:#999" />
			<text x="50%" y="50%" font-size="20" dy=".3em" fill="#fff" text-anchor="middle">200x200</text>
		</svg>
	`);
	res.end();
});