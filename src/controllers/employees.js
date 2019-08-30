const
	status_messages = require("../status_messages");

function list_all_employees(req, res) {
	console.log(status_messages.GET("list all employees"));

  let { collection } = req.app.locals;
  collection.find({ }).toArray()
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      console.error(err);
    });

}

function list_single_employee(req, res) {
	console.log(status_messages.GET(`list single employee`));

  let { collection } = req.app.locals;
  

}

function create_employee(req, res) {
	console.log(status_messages.POST(`create employee`))


}

/** update_employee(): update employee information */
async function update_employee(req, res) { // handler with async/await
	console.log(status_messages.PATCH(`update employee`))


}

async function delete_employee(req, res) {
	console.log(status_messages.DELETE(`delete employee`))



}

module.exports = {
	list_all_employees,
	list_single_employee,
	create_employee,
	update_employee,
	delete_employee
};
