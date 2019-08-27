const
  status_messages = require("./status_messages");

function list_all_employees(req, res) {
  console.log(status_messages.GET("list all employees"));

  let { knex } = req.app.locals;

  return knex
    .select("name", "address", "salary")
    .from("employees")
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      console.error("ERROR:", err);
    });

}

function list_single_employee(req, res) {
  console.log(status_messages.GET(`list single employee`));

  let { knex } = req.app.locals;
  let { id } = req.params;
  // PROC: ...
  return knex
    .select('*')
    .from("employees")
    .where({ id: `${id}` })
    .then(function (data) {
      data.length ?
        res.status(200).json(data) :
        res.status(404).end(status_messages.EMPLOYEE_NOT_FOUND(id));
    })
    .catch(function (err) {
      console.error("ERROR:", err);
    });

}

function create_employee(req, res) {
  console.log(status_messages.POST(`create employee`))

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
        res.status(200).end(status_messages.EMPLOYEE_CREATED);
      })
      .catch(function (err) {
        res.status(500).end(status_messages.UNKNOWN_ERROR);
        console.error(err);
      });
  }

  return res.status(400).end(status_messages.COLUMNS_REQ(mandatory_columns));

}

/** update_employee(): update employee information */
async function update_employee(req, res) { // handler with async/await
  console.log(status_messages.PATCH(`update employee`))

  let { knex } = res.app.locals;
  let { id } = req.params;
  let notnull_columns = ["name", "email", "salary"];
  let payload = req.body;

  for (let field of Object.keys(payload))
    if (!payload[field] && notnull_columns.includes(field))
      return res.status(400)
        .end(status_messages.COLUMNS_REQ(notnull_columns));

  try {
    let response = await knex("employees")
      .where("id", id)
      .update(payload);

    return response ?
      res.status(204).end() :
      res.status(404).end(status_messages.EMPLOYEE_NOT_FOUND(id));

  } catch (err) {
    console.error(err);
    return res.status(500).end(status_messages.UNKNOWN_ERROR);
  }

}

async function delete_employee(req, res) {
  console.log(status_messages.DELETE(`delete employee`))

  let { knex } = req.app.locals;
  let { id } = req.params;

  try {
    let response = await knex("employees")
      .where("id", id)
      .del();

    return response ?                                                 // if response
      res.status(200).end(status_messages.EMPLOYEE_DELETED(id)) :     // then 👈
      res.status(404).end(status_messages.EMPLOYEE_NOT_FOUND(id));    // else 👈

  } catch (e) {
    return res.status(500).end(status_messages.UNKNOWN_ERROR);
  }

}

module.exports = {
  list_all_employees,
  list_single_employee,
  create_employee,
  update_employee,
  delete_employee
};
