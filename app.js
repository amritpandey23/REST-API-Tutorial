const 
    path = require("path"),
    express = require("express"),
    data = require("./data.json");

let 
    app = express()
    router = express.Router();

// all employee data
router.get("/employees", function(req, res) {
    return res.send(JSON.stringify(data));
});

// individual employee route
router.get("/employees/:id", function(req, res) {
    let 
        id = req.params.id,
        employee = data.filter(function(e) {return e.id === parseInt(id)});

    return res.send(employee);
});

app.use("/api", router);

app.listen(port=3000, function() {
    console.info(`server started on htpp://localhost:${port}`);
});