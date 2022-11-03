import { watcher, server } from "./index.js";

// watcher("");
server("/public", "index.html", 4000, "server running");
// let myServer = server("index.js", 4000, "server running");
// console.log(myServer);
// myServer.watch("./public");
// myServer.serveOn("index.js", 4000, "server running");

// let server = new cServerClass("index.html", 4000, "server running");
// server.watch("./public");
// server.serveOn("req", "res", "index.html", 4000, "server running");

// cServer.watch("./public");
// cServer.serveOn(req, res, "index.html", 4000, "server running");
