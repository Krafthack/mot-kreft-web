var express = require('express');

var server = express();
var path = require('path');

server.use(express.static(path.join(__dirname, 'public')));

var port = process.env.NODE_ENV || process.env.PORT || 3000;
server.listen(port);

console.log("listening to port " + port);
