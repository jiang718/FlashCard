const express = require("express");
const router = express.Router();
const MONGO_PATH = "mongodb://localhost:27017/";
const MongoClient = require("mongodb").MongoClient;

router.get("/", (req, res) => {
  MongoClient.connect(
    MONGO_PATH,
    (err, db) => {
      const dbo = db.db("flashCardDb");

      dbo
        .collection("cardLibrary")
        .find()
        .toArray((err, docs) => {
          res.json(docs[0]);
        });
      db.close();
    }
  );
});
module.exports = router;
