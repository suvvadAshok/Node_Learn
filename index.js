const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Hello Node.js");
});
server.listen(3003);

//require() ---> grab the package in Node.js called http.
// require is similar to import or include in other languages.
// require take name of the package as string and retun the package.
