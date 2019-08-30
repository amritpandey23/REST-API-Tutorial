const
	status_messages = require("../status_messages");

function list_all_departments(req, res) {
	console.log(status_messages.GET("list all departments"));

	

}

function list_single_department(req, res) {
	console.log(status_messages.GET("list single departments"));

	

}

function create_department(req, res) {
	console.log(status_messages.POST("create department"));



}

function update_department(req, res) {
	console.log(status_messages.PATCH("update department"));

	

}

function delete_department(req, res) {
	console.log(status_messages.DELETE("delete department"));


}

async function get_department_employees(req, res) {
	console.log(status_messages.POST("employees in a department"));



}

module.exports = {
	list_all_departments,
	list_single_department,
	create_department,
	update_department,
	delete_department,
	get_department_employees
};
