import http from "http";
import path, { dirname } from "path";
import fs from "fs";
import url, { fileURLToPath } from "url";
import { random } from "./randonNumber.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// console.log(__dirname);

// . Inside of your myWebServer module, create a web server which listens to requests
// on port 1234

// 7. Inside your "myWebServer" module
// a. Import your "randomNumber" module inside of your "myWebServer" module.
// Now, generate a random number using the random() function from the
// "randomNumber" module and return the generated random number to the client
// browser when request is sent to port 1234.
// ■ Don’t forget to run your module on your terminal to keep your server
// running and
// ■ Go to your browser and type “localhost:1234” to see the random number
// generated

// Create a new folder called "static"
// a. Inside the "static" folder, save the “apple html css replica” folder by
// downloading and extracting it
// b. Add a sample "about.html" page inside of your “apple html css replica” folder
// you just downloaded. Open your "about.html” file and add the text ‘This is
// coming from my "about page ” ’

// c. Modify your request listener function in a way it would serve the "about.html"
// page when users request it on the browser
// ■ Hint: You will need to import additional node modules to display your
// “about.html” page when users request it on the browser
// d. Don’t forget to run your module on your terminal to keep your server running.
// Now, go to your browser and type “localhost:1234” to see the ‘This is coming
// from my "about page ” ’ text sent to your browser
// e. Now, modify your listener function in a way that it serves any of the pages inside
// of your "static" folder when requested
import dotenv from "dotenv";
import mime from "mime-types";
import express from "express";
dotenv.config();
const PORT = process.env.PORT;
let fileToBeServed = path.join(__dirname, "/static", "/apple-html-css-replica");
const server = express();

server.use(express.static(fileToBeServed));

server.get("/", (req, res) => {
  res.sendFile(path.join(fileToBeServed, "index.html"));
});
server.get("/about", (req, res) => {
  res.sendFile(path.join(fileToBeServed, "about.html"));
});
server.get("*", (req, res) => {
  res.write("<h1> not Found 404</h1>");
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

// http
//   .createServer(function (req, res) {
//     // let generatedNum = random();
//     // res.write("Request received and processed " + generatedNum);
//     let fileToBeServed = path.join(
//       __dirname,
//       "/static",
//       "/apple-html-css-replica"
//     );

//     let paredUrl = url.parse(req.url);
//     let parsedPath = paredUrl.path;
//     let dynamicContentType = mime.lookup(parsedPath);

//     if (parsedPath == "/") {
//       parsedPath = "index.html";
//     } else if (parsedPath == "/about") {
//       parsedPath = "about.html";
//     }

//     fs.readFile(path.join(fileToBeServed, parsedPath), function (err, data) {
//       if (err) console.log(err);
//       res.writeHead(200, { "content-type": dynamicContentType });
//       res.end(data);
//     });
//   })
//   .listen(PORT, function () {
//     console.log(`server running on port: ${PORT}`);
//   });

// ■ Note: It is a good practice to write a custom message such as
// console.log(“Server running”) in your server listener you create to check
// if your server is running and listening to requests
// b. Run your "myWebServer" module on your terminal to check if your server is
// listening to requests at port 1234
// c. Inside of your "myWebServer" module, write your request listener function as a
// callback inside of the server you created above. This function should return the
// following text message "Request received and processed" to the browser.
// d. Run your "myWebServer" module on your terminal and go to your browser and
// type “localhost:1234” to check if your browser displays the "Request received and
// processed " message sent from your server
