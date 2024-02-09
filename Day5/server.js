const http = require("http");
const url = require("url");
var port = 8080;
http
  .createServer((req, res) => {
    let path = url.parse(req.url).pathname;
    console.log(path);
    //console.log(__dirname);
    res.end();
  })
  .listen(port);
console.log(`Server is running at http://localhost:${port}`);
