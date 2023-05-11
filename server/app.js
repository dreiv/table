const http = require("http");
const url = require("url");
const { load } = require("./load.js");

const port = 4040;
const server = http.createServer((req, res) => {
  const { from = 0, to = 100 } = url.parse(req.url, true).query;

  res.writeHead(200, {
    "Content-Type": "text/html",
    "Access-Control-Allow-Origin": "*",
  });

  const response = JSON.stringify(load(from, to));
  setTimeout(() => {
    res.end(response);
  }, Math.random() * 500 + 300);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
