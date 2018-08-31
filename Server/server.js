const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 2801;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

const express = require("express");
const bodyParser = require("body-parser");

//app is next dev
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use("/api/cardData", require("./api"));

    server.get("*", (req, res) => {
      return handler(req, res);
    });

    server.get("/hello", (req, res) => {
      handler(req, res);
    });
    server.get("/cardData", (req, res) => {
      handler(req, res);
    });
    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
