require("dotenv").config();
const express = require("express");
const connection = require("./db");
const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
  connection.query("SELECT * from test", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des tests");
    } else {
      res.json(results);
    }
  });
});

app.get("/test/:id", (req, res) => {
  const idTest = req.params.id;
  connection.query(
    "SELECT * FROM test WHERE id = ?",
    [idTest],
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des tests");
      } else {
        res.json(results);
      }
    }
  );
});

app.post("/test", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO test SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un test");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put("/test/:id", (req, res) => {
  const idTest = req.params.id;
  const formData = req.body;
  connection.query(
    "UPDATE test SET ? WHERE id = ?",
    [formData, idTest],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un test");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

app.delete("/test/:id", (req, res) => {
  const idTest = req.params.id;
  connection.query("DELETE FROM test WHERE id = ?", [idTest], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un test");
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${process.env.PORT}`);
});
