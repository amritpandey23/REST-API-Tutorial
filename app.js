const
	express = require("express"),
	knex = require("knex"),
	body_parser = require("body-parser"),
	settings = require("./settings"),
	routes = require("./routes"),
	middlewares = require("./middlewares");

let app = express();

let knex_connect = knex({
		client: "mysql",
		connection: settings.database
	});

let	api_router = express.Router();


/** --- 👇 employees only routes 👇 --- */

// list all employees
api_router.get("/employees", routes.employees.list_all_employees);

// list single employee
api_router.get(
	"/employees/:id",
	middlewares.validate_id,
	routes.employees.list_single_employee
);

// create new employee
api_router.post("/employees", routes.employees.create_employee);

// update current employee
api_router.patch(
	"/employees/:id",
	middlewares.validate_id,
	routes.employees.update_employee
);

// delete an employee
api_router.delete(
	"/employees/:id",
	middlewares.validate_id,
	routes.employees.delete_employee
);

/** --- 👇 departments only routes 👇 --- */

// list all departments
api_router.get("/departments", routes.departments.list_all_departments);

// list single department
api_router.get(
	"/departments/:id",
	middlewares.validate_id,
	routes.departments.list_single_department
);

// create new department
api_router.post("/departments", routes.departments.create_department);

// update current department
api_router.patch(
	"/departments/:id",
	middlewares.validate_id,
	routes.departments.update_department
);

// delete a department
api_router.delete(
	"/departments/:id",
	middlewares.validate_id,
	routes.departments.delete_department
);

/** --- 👇 employees and departments mixed routes 👇 --- */

// list all employees in a department
api_router.get(
	"/departments/:id/employees",
	middlewares.validate_id,
	routes.departments.get_department_employees
);

// express app settings
app.use(body_parser.json());
app.use("/api", api_router);
app.locals.knex = knex_connect;

app.listen(settings.api_server_port, function () {
	console.info(`INFO: server started on http://localhost:${settings.api_server_port}`);
});
