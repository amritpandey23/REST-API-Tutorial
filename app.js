const 
    path = require("path"),
    express = require("express"),
    data = require("./data.json");

let 
    app = express()
    router = express.Router();

router.get("/employees", function(req, res) {
    console.log(req.query); // req.query contains data passed by query string
    return res.send(JSON.stringify(data));
});

app.use("/api", router);

app.use("images", express.static(path.join(__dirname, "img")));

app.listen(port=3000, function() {
    console.info(`server started on htpp://localhost:${port}`);
});