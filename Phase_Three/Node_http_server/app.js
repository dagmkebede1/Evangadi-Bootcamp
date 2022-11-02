// import http from "http";
// import url from "url";
// import fs from "fs";
// import mime from "mime-types";
// import path from "path";

//to get the __dirname
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const http = require("http");
const url = require("url");
const fs = require("fs");
const mimeType = require("mime-types").lookup;
const path = require("path");
// import { Socket } from "net";
// const server = http
//   .createServer((req, res) => {
//   if (req.url == "/") {
//     res.write("this is Home");
//     res.end();
//   } else if (req.url == "/about") {
//     res.write("this is About page");
//     res.end();
//   } else {
//     res.write("not found");
//     res.end();
//   }
//     switch (req.url) {
//       case "/":
//         res.write("this is home");
//         res.end();
//         break;
//       case "/about":
//         res.write("this is about page");
//         res.end();
//         break;
//       default:
//         res.write("not found");
//         res.end();
//         break;
//     }
//     console.log(req.url);
//     // console.log(res)
//     res.end();
//   })
//   .listen(4000)
//   .on("connection", (Socket) => {
//     console.log("someone is contating our server ...");
//   });
// server.on("connection", (Socket) => {
//   console.log("someone is contating our server ...");
// });
// server.listen(4000);

// console.log("server started");

let port = 4000 || process.env.PORT;

const server = http
  .createServer(function (req, res) {
    let file = url.parse(req.url, true);
    let filePath = file.path;
    console.log(filePath);
    if (filePath == "/") {
      filePath = "index.html";
      // console.log(url.parse(req.url));
    }
    // else if (filePath == "/about") {
    //   filePath = "about.html";
    // } else if (filePath == "/contact") {
    //   filePath = "contact.html";
    // } else {
    //   filePath = "notFound.html";
    // }
    let corectPath = __dirname + "/public/" + filePath;
    console.log(corectPath);
    fs.readFile(corectPath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // let parsed = url.parse(req.url, true);
        // // console.log(parsed.path);
        // console.log(filePath);
        let mime = mimeType(filePath);
        console.log(mime);
        res.writeHead(200, { "content-type": mime });
        res.end(data);
      }
    });
  })
  .listen(port, console.log(`server running on port: ${port}`));
