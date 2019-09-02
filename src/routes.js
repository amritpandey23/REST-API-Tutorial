const
	{ Router } = require("express"),
	middlewares = require("./middlewares"),
	{ employees, departments } = require("./controllers");
	
let api_router = Router();

/** --- 👇 employees only routes 👇 --- */

// list all employees
api_router.get("/employees", employees.list_all_employees);

// list single employee
api_router.get(
	"/employees/:id",
	middlewares.convert_object_id,
	employees.list_single_employee
);

// create new employee
api_router.post("/employees", employees.create_employee);

// update current employee
api_router.patch(
	"/employees/:id",
	middlewares.convert_object_id,
	employees.update_employee
);

// delete an employee
api_router.delete(
	"/employees/:id",
	middlewares.convert_object_id,
	employees.delete_employee
);

/** --- 👇 departments only routes 👇 --- */

// list all departments
api_router.get("/departments", departments.list_all_departments);

/** --- 👇 employees and departments mixed routes 👇 --- */

// list all employees in a department
api_router.get(
	"/departments/:name/employees",
	middlewares.convert_object_id,
	departments.get_department_employees
);

module.exports = api_router;
