const
  status_messages = require("../status_messages");

function list_all_departments(req, res) {
  console.log(status_messages.GET("list all departments"));

  let { collection } = req.app.locals;
  return collection.distinct("department.name")
    .then(function (response) {
      res.status(200).json(response);
    })
    .catch(function (err) {
      console.error(err);
      res.status(401).end(status_messages.UNKNOWN_ERROR);
    });

}


async function get_department_employees(req, res) {
  console.log(status_messages.GET("employees in a department"));

  let { collection } = req.app.locals;
  let { name } = req.params;

  return collection.find({ "department.name": new RegExp(name, 'i') }).toArray()
    .then(function (response) {
      res.status(200).json(response);
    })
    .catch(function (err) {
      console.error(err);
      res.status(503).end(status_messages.UNKNOWN_ERROR);
    });


}

module.exports = {
  list_all_departments,
  get_department_employees
};
