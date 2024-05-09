const http = require('http');

http.createServer((req, res) =>{
    res.write("<h1>my name is shahzaib</h1>");
    res.end();
}).listen(4000);