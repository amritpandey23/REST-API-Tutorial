function list_all_employees(req, res) {
  let { knex } = req.app.locals;

  knex
    .select("name", "address", "salary")
    .from("employees")
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      console.error("ERROR:", err);
    });
  
  return console.log(`GET: list all employees.`);
}

function list_single_employee(req, res) {
  let { knex } = req.app.locals;
  let { id } = req.params;
  // PROC: ...
  knex
    .select("name", "address", "salary")
    .from("employees")
    .where({ id: `${id}` })
    .then(function (data) {
      return data.length ?
        res.status(200).json(data) :
        res.status(404).end("Employee not found.");
    })
    .catch(function (err) {
      console.error("ERROR:", err);
    });
  
  return console.log(`GET: list single employee id: ${id}`);
}

module.exports = { list_all_employees, list_single_employee };
