const
    express = require("express"),
    routes = require("./routes");

let 
    app = express()
    router = express.Router();

// all employee data
router.get("/employees", routes.employees.listAllEmployees);

app.use("/api", router);

app.listen(port=3000, function() {
    console.info(`server started on htpp://localhost:${port}`);
});