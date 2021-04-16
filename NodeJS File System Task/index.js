let fs = require("fs");
let http = require("http");
let fetch = require("node-fetch");

http
  .createServer((req, res) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        const res = JSON.stringify(data);
        fs.writeFileSync("./result/posts.json", res, (err) => {
          if (err) throw err;
          console.log("File Created Successfully");
        });
      })
      .catch((err) => console.log(err));
  })
  .listen(4000, "127.0.0.1");
console.log("Server is running on PORT 4000");
