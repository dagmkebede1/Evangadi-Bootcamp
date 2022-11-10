const express = require("express");
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myDB",
});

// const app = express();
const server = express();
const PORT = 5000 || process.env.PORT;

server.get("/install", (req, res) => {
  let q = `CREATE TABLE IF NOT EXISTS Products(
        product_id INT(11) NOT NULL AUTO_INCREMENT,
        product_url VARCHAR(255) NOT NULL,
        product_name VARCHAR(50) NOT NULL,
        PRIMARY KEY (product_id)
    )`;
  let q1 = `CREATE TABLE IF NOT EXISTS ProductDescription(
        description_id INT NOT NULL AUTO_INCREMENT,
        product_id INT(11) NOT NULL,
        product_brief_description VARCHAR(255) NOT NULL,
        product_description VARCHAR(100) NOT NULL,
        product_img VARCHAR(50) NOT NULL,
        product_link VARCHAR(50) NOT NULL,
        PRIMARY KEY (description_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

  let q2 = `CREATE TABLE IF NOT EXISTS ProductPrice(
        price_id INT NOT NULL AUTO_INCREMENT,
        product_id INT(11) NOT NULL,
        starting_price VARCHAR(50) NOT NULL,
        price_range VARCHAR(50) NOT NULL,
        PRIMARY KEY (price_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

  let q3 = `CREATE TABLE IF NOT EXISTS User(
        user_id INT(11) NOT NULL AUTO_INCREMENT,
        User_name VARCHAR(255) NOT NULL,
        User_password VARCHAR(100) NOT NULL,
        PRIMARY KEY (user_id)
    )`;
  let q4 = `CREATE TABLE IF NOT EXISTS Orders(
        order_id INT(11) NOT NULL AUTO_INCREMENT,
        product_id INT NOT NULL,
        user_id INT NOT NULL,
        PRIMARY KEY (order_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id),
        FOREIGN KEY (user_id) REFERENCES User(user_id)
    )`;

  db.query(q, (err, result) => {
    if (err) console.log(err);
    else {
      console.log("Product table created !");
      db.query(q1, (err1, result1) => {
        if (err1) console.log(err1);
        else {
          console.log("ProductDescription Created !");
          db.query(q2, (err2, result2) => {
            if (err2) console.log(err2);
            else {
              console.log("Product Price Created !");
              db.query(q3, (err3, result3) => {
                if (err3) console.log(err3);
                else {
                  console.log("User Table Created !");
                  db.query(q4, (err4, result4) => {
                    if (err4) console.log(err4);
                    else {
                      console.log("Orders table created !");
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
  res.write("your job is Done !");
  res.end();
});

server.listen(PORT, () => console.log(`SERver Running on port: ${PORT}`));
