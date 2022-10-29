import http from "http";
import { Socket } from "net";
const server = http
  .createServer((req, res) => {
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
    switch (req.url) {
      case "/":
        res.write("this is home");
        res.end();
        break;
      case "/about":
        res.write("this is about page");
        res.end();
        break;
      default:
        res.write("not found");
        res.end();
        break;
    }
    console.log(req.url);
    // console.log(res)
    res.end();
  })
  .listen(4000)
  .on("connection", (Socket) => {
    console.log("someone is contating our server ...");
  });
// server.on("connection", (Socket) => {
//   console.log("someone is contating our server ...");
// });
// server.listen(4000);

console.log("server started");
