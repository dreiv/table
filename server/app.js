// Load modules to create an http server, parse a URL and parse a URL query.
import http from "http";
import { URL } from "url";
import { parse } from "querystring";

// Provide the origin for relative URLs sent to Node.js requests.
const serverOrigin = "http://localhost:8000";

// Configure our HTTP server to respond to all requests with a greeting.
const server = http.createServer((request, response) => {
  // Parse the request URL. Relative URLs require an origin explicitly.
  const url = new URL(request.url, serverOrigin);
  // Parse the URL query. The leading '?' has to be removed before this.
  const { name } = parse(url.search.substring(1));

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(`Hello, ${name}!\n`);
});

// Listen on port 8000, IP defaults to 127.0.0.1.
server.listen(8000, () => {
  // Print a friendly message on the terminal.
  console.log(`Server running at ${serverOrigin}/`);
});
