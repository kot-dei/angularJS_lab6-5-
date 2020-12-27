const http = require('http');
var fs = require("fs");

http.createServer((req, res) => {
    res.setHeader('access-control-allow-origin', '*');
    res.setHeader('content-type', 'application/json')
    fs.readFile("students.json", 'utf8', function (err, data) {
        res.end(data);
     });
}).listen(3000);