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

function createEmployee(req, res) {
  let { knex } = res.app.locals;
  let mandatory_columns = ["name", "email", "salary"];    // not null fields
  let payload = req.body;                                 // data posted
  let payload_keys = Object.keys(payload);                // fields in the data
  let mandatory_columns_exists = true;

  for (let field of mandatory_columns) 
    if (!payload_keys.includes(field)) 
      mandatory_columns_exists = !mandatory_columns_exists;

  if (mandatory_columns_exists) {
    return knex("employees")
      .insert(payload)
      .then(function (response) {
        res.status(200).end("employee created.");
      })
      .catch(function (err) {
        res.status(500).end("failed.");
        console.error(err);
      });
  }

  return res.status(400).end(`mandatory columns are required. columns: ${mandatory_columns.join(' ')}`);
}

module.exports = {
  list_all_employees,
  list_single_employee,
  createEmployee
};
