import http from "http";
import mime from "mime-types";
import path from "path";
import fs, { watch } from "fs";
import { dirname } from "path";
import url, { fileURLToPath } from "url";

//to get the __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));
// class cServerClass {
//   constructor(file, port, message) {
//     this.port = port;
//     this.file = file;
//     this.message = message;
//     watch = (stati) => {
//       return path.join(__dirname, stati);
//     };
//     serveOn = (file, port, message) => {
//       let filePath = watch() + file;

//       http
//         .createServer((req, res) => {
//           let path = url.parse(req.url, true).path;
//           let dynamicContentType = mime.lookup(path);

//           fs.writeFile(path.join(__dirname, filePath), (err, data) => {
//             if (err) {
//               throw err;
//             }
//             res.writeHead(200, { "content-type": dynamicContentType });
//             return res.end(data);
//           });
//         })
//         .listen(port, () => {
//           console.log(message);
//         });
//     };
//   }
// }
// function server(file, port, message) {
//   return new cServerClass(file, port, message);
// }

// export { server };
// console.log()
let watcher = (stati) => {
  return path.join(__dirname, stati);
};

let server = (stat, file, port, message) => {
  let filePath = watcher(stat) + file;

  http
    .createServer((req, res) => {
      let path = url.parse(req.url, true).path;
      let dynamicContentType = mime.lookup(path);

      fs.writeFile(path.join(__dirname, filePath), (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "content-type": dynamicContentType });
        return res.end(data);
      });
    })
    .listen(port, () => {
      console.log(message);
    });
};

export { watcher, server };
