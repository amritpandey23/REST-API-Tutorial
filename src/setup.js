const
  knex_connect = require("knex"),
  bcrypt = require("bcrypt"),
  { database } = require("./settings");

let knex = knex_connect({
  client: "mysql",
  connection: database
});

knex.schema.hasTable("users")
  .then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("users", function(table) {
        table.increments("id");
        table.string("username");
        table.string("password");
      })
        .then(function() {
          console.log("users table was created");
        })
        .catch(function(err) {
          console.error(err);
        });
    }

    let username = "adam";
    let password = "password";

    return bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        knex("users").insert({ username, password: hash })
          .then(function() {
            console.log("username inserted");
          })
          .catch(function(err) {
            console.error(err);
          });
      });
    });
  })
  .catch(function(err) {
    console.error(err);
  });
