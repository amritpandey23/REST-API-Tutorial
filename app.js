const
    express = require("express"),
    knex = require("knex"),
    body_parser = require("body-parser"),
    settings = require("./settings"),
    routes = require("./routes"),
    middlewares = require("./middlewares");

let app = express();
app.use(body_parser.json());

let api_router = express.Router();
app.use("/api", api_router);

// employee routes
api_router.get("/employees", routes.employees.list_all_employees);
api_router.get(
    "/employees/:id", 
    middlewares.validate_id, 
    routes.employees.list_single_employee
);
api_router.post("/employees", routes.employees.create_employee);
api_router.patch(
    "/employees/:id", 
    middlewares.validate_id, 
    routes.employees.update_employee
);
api_router.delete(
    "/employees/:id",
    middlewares.validate_id,
    routes.employees.delete_employee
);

// department routes
api_router.get("/departments", routes.departments.list_all_departments);
api_router.get(
    "/departments/:id", 
    middlewares.validate_id, 
    routes.departments.list_single_department
);
api_router.post("/departments", routes.departments.create_department);
api_router.patch(
    "/departments/:id", 
    middlewares.validate_id, 
    routes.departments.update_department
);
api_router.delete(
    "/departments/:id", 
    middlewares.validate_id, 
    routes.departments.delete_department
);

api_router.get(
    "/departments/:id/employees", 
    middlewares.validate_id,
    routes.departments.get_department_employees
);

let knex_connect = knex({
    client: "mysql",
    connection: settings.database
});
app.locals.knex = knex_connect;

app.listen(settings.api_server_port, function() {
    console.info(`INFO: server started on http://localhost:${settings.api_server_port}`);
});
