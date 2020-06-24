require("dotenv").config();
const express = require("express");
const connection = require("./db");
const app = express();

app.get("/test", (req, res) => {
  connection.query("SELECT * from test", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des tests");
    } else {
      res.json(results);
    }
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${process.env.PORT}`);
});
