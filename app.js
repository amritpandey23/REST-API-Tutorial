const express = require("express");

let app = express();

// app.all("/api/employees", function(req, res) {
//     res.send(`HTTP ${req.method} in action.`)
// });

// app.route("/api/employees")
//     .get(function(req, res) {
//         res.send("OK.");
//     })
//     .post(function(req, res) {
//         res.send("OK POST.")
//     });

app.get("/", function(req, res) {
    res.send("helo, world.");
});

app.listen(port=3000, function() {
    console.info(`server started on htpp://localhost:${port}`);
});