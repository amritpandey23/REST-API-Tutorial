const 
    express = require("express"),
    data = require("./data.json");

let 
    app = express()
    router = express.Router();

router.get("/employees", function(req, res) {
    res.send(JSON.stringify(data));
});

app.use("/api", router);

app.listen(port=3000, function() {
    console.info(`server started on htpp://localhost:${port}`);
});