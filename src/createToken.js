const
  knex_connect = require("knex"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  { database } = require("./settings");

let knex = knex_connect({
  client: "mysql",
  connection: database
});

let username = "adam";
let password = "password";

knex("users")
  .where({ username })
  .then(function(response) {
    bcrypt.compare(password, response[0].password, function(err, result) {
      if (!result)
        return console.log("Incorrect password");
    
      console.log("Authentication success");

      let payload = {
        username,
        isAdmin: true
      }
      let signature = "s3GNa+Ur3";
      let expiresIn = 3600;

      let token = jwt.sign(payload, signature, { expiresIn });
      console.log(token);
    });
  })
  .catch(function(err) {
    console.error(err);
  });
