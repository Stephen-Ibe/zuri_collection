const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
        <body style="background:black; color:white; text-align:center;">
                <h1>Node JS Training</h1>
                <p>Response from Server...</p>
        </body>
    </html>
  `);
});
server.listen(3000, "127.0.0.1");
console.log("Server Running...");
