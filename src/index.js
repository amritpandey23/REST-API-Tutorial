const
  app = require("./app"),
  { api_server_port, database } = require("./settings"),
  { MongoClient } = require("mongodb");

let mongo_uri = `mongodb://${database.host}:${database.port}`;

function start_app() {  
  MongoClient.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function(client) {
      let db = client.db("rest_app_node");
      let collection = db.collection("employees");
      app.locals.collection = collection;

      app.listen(api_server_port, function() {
        console.log(`App has started at http://localhost:${api_server_port}`);
      });
    })
    .catch(function(err) {
      if (err) throw err;
    });

}

module.exports = start_app;
