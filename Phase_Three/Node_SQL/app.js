import express from "express";
import db from "./dbConnection.js";
// const express = require("express");
// const mysql = require("mysql2");

const app = express();
app.use(express.json());
// let result = await db.query(q);
// console.log(result);
app.get("/create", (req, res) => {
  let sql = `CREATE TABLE G3(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    course VARCHAR(255) NOT NULL
  )`;
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      res.json({ status: "success" });
    }
  });
});

app.get("/", (req, res) => {
  let q = "SELECT * FROM stud";
  db.query(q, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

app.post("/add", (req, res) => {
  let q = "insert into stud (`stud_id`, `name`) values (?)";
  let values = [req.body.stud_id, req.body.name];

  db.query(q, [values], (err, data) => {
    if (err) console.log(err);
    res.json({ status: "success" });
  });
});

app.listen(4000, console.log("server running on port 4000"));
