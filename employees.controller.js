const data = require("./data.json");

function list_all_employees(req, res) {
    // let { db_connection } = req.app.locals;
    // db_connection.query(`
    //     SELECT e.id, e.name, e.address, e.salary,
    //     d.name as department
    //     FROM employees e
    //     INNER JOIN departments d
    //     ON e.department = d.id
    //     WHERE e.salary > 150000;
    // `, function(err, results) {
    //     if (err) {
    //         return res.status(500).json(err);
    //     }
    //     return res.status(200).json(results);
    // });

    let { knex } = req.app.locals;
    knex
        .select("name", "address", "salary")
        .from("employees")
            .then(function(data) {
                res.status(200).json(data);
            })
            .catch(function(err) {
                console.error("ERROR:", err);
            });
}

function list_single_employee(req, res) {
    let { knex } = req.app.locals;
    let { id } = req.params;
    knex
        .select("name", "address", "salary")
        .from("employees")
        .where({ id: `${id}` })
            .then(function(data) {
                return data.length ? 
                res.status(200).json(data) :
                res.status(404).end("Employee not found.");
            })
            .catch(function(err) {
                console.error("ERROR:", err);
            });
}

module.exports = { list_all_employees, list_single_employee };