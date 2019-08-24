const
    express = require("express"),
    mysql = require("mysql2"),
    routes = require("./routes"),
    settings = require("./settings");

let app = express();

// all employee data
let api_router = express.Router();
api_router.get("/employees", routes.employees.list_all_employees);
app.use("/api", api_router);

let db_connection = mysql.createConnection(settings.database);
db_connection.connect(function(err) {
    if (err) {
        console.error("ERROR: ", err);
        return process.exit(0);
    }

    app.locals.db_connection = db_connection;
    console.info("INFO: connection to database established successfully!");
    return app.listen(settings.api_server_port, function() {
        console.info(`INFO: server started on http://localhost:${settings.api_server_port}`);
    });
});