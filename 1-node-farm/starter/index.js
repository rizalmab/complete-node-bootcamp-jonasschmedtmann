const fs = require("fs")
const http = require("http")

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
const server = http.createServer((req, res) => {
    res.end("Hello from the server")
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000")
})