const data = require("./data.json");

function listAllEmployees(req, res) {
    // res.statusCode = 200;
    // return res.json(data);
    return res.status(200).json(data);
}

module.exports = {
    listAllEmployees
};