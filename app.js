var 
    http = require("http"),
    url = require("url"),
    data = require("./data.json");

function getAllData(req, res) {
    res.end(JSON.stringify(data));
}

function saveData(req, res) {
    let body = "";

    req.on("error", function(error) {
        res.statusCode = 400;
        return res.end(error)
    });

    req.on("data", function(chunk) {
        body += chunk.toString();
    });

    req.on("end", function() {
        data.push(JSON.parse(body));
        res.statusCode = 201;
        return res.end(`Data added for ${JSON.parse(body).name}.`);
    });
    
}

function defaultRoute(req, res) {
    res.end("OK");
}

let server = http.createServer(function(req, res) {
    let urlParts = url.parse(req.url);
    if (urlParts.pathname === "/") {
        switch(req.method) {
            case "GET":
                getAllData(req, res);
                break;
            case "POST":
                saveData(req, res);
                break;
            default:
                defaultRoute(req, res);
                break;
        }
    } else {
        res.end(`Endpoint not found at ${urlParts.pathname}`);
    }
});

server.listen(port=3000, function() {
    console.log(`Server was started, http://localhost:3000`);
});