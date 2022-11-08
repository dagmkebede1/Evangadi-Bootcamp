import express from "express";
import mysql from "mysql2";

let db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

const app = express();

app.use(express.json());

// app.get("/")
app.get("/install", function (req, res) {
  let q = `Create table product(product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  primary key (product_id));`;
  let p2 = `create table if not exists productDec(
    product_id INT NOT NULL,
  desc_id INT NOT NULL,
    desc VARCHAR(255),
    primary key (desc_id),
    foreign key (product_id) references product(product_id);


  )`;
  db.query(q, function (err, result) {
    if (err) console.log(err);
    console.log(result);
  });

  res.write(`sum:`);

  res.end();
  console.log("samson");
});

// app.post("/");
app.post("/profile", function (req, res) {
  console.log(req.body);
  res.json({
    name: req.body.name,
    age: req.body.age,
  });
});

// app.patch("/profile:id");
app.patch("/profile/:id", function (req, res) {
  console.log(req.params.id);

  let profile = {
    name: "samson",
    age: 78,
  };

  if (req.params.id == profile.name) {
    profile.name = req.body.name;
    res.json({
      profile,
    });
  }

  res.end();
});

app.delete("/");

app.listen(4000, function () {
  console.log("Server runinng on post: 4000");
});
