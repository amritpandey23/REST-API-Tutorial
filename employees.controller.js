const data = require("./data.json");

function list_all_employees(req, res) {
    // res.statusCode = 200;
    // return res.json(data);
    let { db_connection } = req.app.locals;
    db_connection.query(`
        SELECT e.id, e.name, e.address, e.salary,
        d.name as department
        FROM employees e
        INNER JOIN departments d
        ON e.department = d.id
        WHERE e.salary > 150000;
    `, function(err, results) {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(results);
    });
}

module.exports = { list_all_employees };