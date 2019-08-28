const
  app = require("./app"),
  { api_server_port } = require("./settings");

function start_app() {
  app.listen(api_server_port, function() {
    console.log(`App has started at http://localhost:${api_server_port}`);
  });
}

module.exports = start_app;
