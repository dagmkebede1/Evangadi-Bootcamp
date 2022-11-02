const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.listen(3000, (err) => {
  if (err) {
    console.log("Error found" + err);
  }
  console.log("Listening to port 3000");
});

// app.use(express.static("apple"));
