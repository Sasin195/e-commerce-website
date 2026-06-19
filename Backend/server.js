require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("E-Commerce Backend Running");
});

app.get("/api/products", (req, res) => {

  const sql = "SELECT * FROM products";

  db.query(sql, (err, results) => {

    if (err) {
      return res.status(500).json({
        message: "Database Error"
      });
    }

    res.json(results);

  });

});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});