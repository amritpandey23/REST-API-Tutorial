const
  knex_connect = require("knex"),
  bcrypt = require("bcrypt"),
  { database } = require("./settings");

let knex = knex_connect({
  client: "mysql",
  connection: database
});

