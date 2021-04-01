const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(`{
      "name":"Kalson Stephen",
      "country":"Nigeria",
      "hobby":"Gaming"
  }`);
});
server.listen(3000, "127.0.0.1");
console.log("Server Running...");
