const fs = require("fs");
const http = require("http");
const url = require("url");

//* FILES ===========================================================================================

// // Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)

// const textOut = `This is what we know about the avocado: ${textIn}. \n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!')

// // Non-blocking, async way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {})
// console.log("Will read file!")

//* SERVER ===========================================================================================
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
  //   res.end("Hello from the server");
});

server.listen(8001, "127.0.0.1", () => {
  console.log("Listening to requests on port 8001");
});
