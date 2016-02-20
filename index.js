'use strict';

const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

let port = process.env.PORT || 3000;
server.listen(port);
console.log('Server started! It\'s listening on port %s', port);

function createSvgXml({width = 100, height = 100, bgColor = '#999', fColor = '#fff', text = undefined}){
	if(text){

		return `
			<svg xmlns="http://www.w3.org/2000/svg" height="${height}" width="${width}">
				<rect width="${width}" height="${height}" style="fill:${bgColor}" />
				<text x="50%" y="50%" font-size="20" dy=".3em" fill="${fColor}" text-anchor="middle">${text}</text>
			</svg>
		`;
	}else{
		return `
			<svg xmlns="http://www.w3.org/2000/svg" height="${height}" width="${width}">
				<rect width="${width}" height="${height}" style="fill:${bgColor}" />
				<text x="50%" y="50%" font-size="20" dy=".3em" fill="${fColor}" text-anchor="middle">${width}x${height}</text>
			</svg>
		`;
	}
	
}

app.get('/', function(req, res){
	res.send('Welcome to image-holder...');
});

app.get('/:widthHeight', function(req, res, next){
	let width = req.params.widthHeight.split('x')[0];
	let height = req.params.widthHeight.split('x')[1];

	if(width && height){
		var svgXml = createSvgXml({
			width: width,
			height: height
		});
		res.type('image/svg+xml');
		res.send(svgXml);
		res.end();
	}else{
		next();
	}

});


app.get('/:widthHeight/:bgColor/:fColor', function(req, res){
	let width = req.params.widthHeight.split('x')[0];
	let height = req.params.widthHeight.split('x')[1];
	let bgColor = req.params.bgColor;
	let fColor = req.params.fColor;
	let text = req.query.text;

	let svgXml = createSvgXml({
		width: width,
		height: height,
		bgColor: '#' + bgColor,
		fColor: '#' + fColor,
		text: text
	});

	res.type('image/svg+xml');
	res.send(svgXml);
	res.end();
});

app.use((req, res) => {res.send('参数错误，请检查参数后重试...');});

