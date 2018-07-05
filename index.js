var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + '/assets/'));

app.get('/', (req,res) => {
	return res.sendFile(__dirname + '/index.html');
});

app.listen(8080);