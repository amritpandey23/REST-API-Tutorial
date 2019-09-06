const
  express = require("express"),
  knex = require("knex"),
  body_parser = require("body-parser"),
  settings = require("./settings"),
  routes = require("./routes"),
  { ApolloClient } = require("apollo-server-express"),
  resolvers = require("./resolvers"),
  schema = require("./schema");

let app = express();

let apolloServer = new ApolloClient({
  typeDefs: schema,
  resolvers
});
apolloServer.applyMiddleware({ app });

let knex_connect = knex({
  client: "mysql",
  connection: settings.database
});

app.use(body_parser.json());
app.use("/api", routes);
app.locals.knex = knex_connect;

module.exports = app;
