const
  express = require("express"),
  body_parser = require("body-parser"),
  routes = require("./routes");

let app = express();

app.use(body_parser.json());
app.use("/api", routes);

module.exports = app;
