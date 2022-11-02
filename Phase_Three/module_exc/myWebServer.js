// // const http = require("http");
// // const randomModule = require("./rondomNumber");

// // console.log(randomModule);
// // let random = randomModule.random();
// // http
// //   .createServer((req, res) => {
// //     res.write(`Request received and processed: ${random}`);
// //     res.end();
// //   })
// //   .listen(1234, "localhost", () => {
// //     console.log("server running on port 1234");
// //   });

// const http = require("http");
// const mime = require("mime-types");
// const fs = require("fs");
// const path = require("path");
// const url = require("url");

// const PORT = 4000 || process.env.PORT;

// http
//   .createServer((req, res) => {
//     let parsedUrl = url.parse(req.url, true);
//     let parsedPath = parsedUrl.path;
//     let dynamicContentType = mime.lookup(parsedPath);
//     // if (parsedPath == "/") {
//     //   parsedPath = "index.html";
//     // } else if (parsedPath == "/about") {
//     //   parsedPath = "about.html";
//     // }
//     switch (parsedPath) {
//       case "/":
//         parsedPath = "index.html";
//         break;
//       case "/about":
//         parsedPath = "about.html";
//         break;
//     }

//     fs.readFile(path.join(__dirname, "/static", parsedPath), (err, data) => {
//       if (err) {
//         throw err;
//       }

//       res.writeHead(200, { "content-type": dynamicContentType });
//       res.end(data);
//     });
//   })
//   .listen(4000, "localhost", () =>
//     console.log(`server running on port : ${PORT}`)
//   );

// using node-static module.
// var http = require("http");

// var nStatic = require("node-static");

// var fileServer = new nStatic.Server("./static");

// http
//   .createServer(function (req, res) {
//     fileServer.serve(req, res);
//   })
//   .listen(3000, () => {
//     console.log("server running");
//   });

const express = require("express");
const path = require("path");

const server = express();
const PORT = 4000 || process.env.PORT;
server.use(express.static(path.join(__dirname, "/static")));
server.get("/", (req, res) => {
  res.sendFile("./index,html");
});
server.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/static", "/about.html"));
});

server.listen(PORT, console.log(`server running on port: ${PORT}`));
