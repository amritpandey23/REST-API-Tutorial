const
	status_messages = require("../status_messages");

function list_all_departments(req, res) {
	console.log(status_messages.GET("list all departments"));

	let { knex } = req.app.locals;

	return knex
		.select('*')
		.from("departments")
		.then(function (data) {
			res.status(200).json(data);
		})
		.catch(function (err) {
			res.status(500).end(status_messages.UNKNOWN_ERROR);
			console.error(err);
		});

}

function list_single_department(req, res) {
	console.log(status_messages.GET("list single departments"));

	let { knex } = req.app.locals;
	let { id } = req.params;

	return knex
		.select('*')
		.from("departments")
		.where("id", id)
		.then(function (data) {
			data.length ?
				res.status(200).json(data[0]) :
				res.status(404).end(status_messages.DEPARTMENT_NOT_FOUND(id));
		})
		.catch(function (err) {
			console.log(err);
			res.status(500).end(status_messages.DATABASE_ERROR);
		});

}

function create_department(req, res) {
	console.log(status_messages.POST("create department"));

	let { knex } = req.app.locals;
	let payload = req.body;

	if (!payload["name"])
		return res.status(400).end(status_messages.NAME_REQ);

	return knex("departments")
		.insert(payload)
		.then(function (response) {
			response ?
				res.status(200).end(status_messages.DEPARTMENT_CREATED) :
				res.status(400).end(status_messages.UNKNOWN_ERROR);
		})
		.catch(function (err) {
			console.error(status_messages.SQL_ERROR(err));
			res.status(500).end(status_messages.DATABASE_ERROR);
		});

}

function update_department(req, res) {
	console.log(status_messages.PATCH("update department"));

	let { knex } = req.app.locals;
	let { id } = req.params;

	return knex("departments")
		.update(payload)
		.where("id", id)
		.then(function (response) {
			response ?
				res.status(204).end() :
				res.status(404).end(status_messages.DEPARTMENT_NOT_FOUND(id));
		})
		.catch(function (err) {
			console.error(err);
			res.status(500).end(status_messages.DATABASE_ERROR);
		});

}

function delete_department(req, res) {
	console.log(status_messages.DELETE("delete department"));

	let { knex } = req.app.locals;
	let { id } = req.params;

	return knex("departments")
		.where("id", id)
		.del()
		.then(function (response) {
			response ?
				res.status(204).end() :
				res.status(404).end(status_messages.DEPARTMENT_NOT_FOUND(id));
		})
		.catch(function (err) {
			console.error(err);
			res.status(500).end(status_messages.DATABASE_ERROR);
		});

}

async function get_department_employees(req, res) {
	console.log(status_messages.POST("employees in a department"));

	let { knex } = req.app.locals;
	let { id } = req.params;
	id = parseInt(id);

	try {
		let data =
			await knex("employees AS e")
				.select(
					"e.name",
					"e.address",
					"e.email",
					"e.hired",
					"e.dob",
					"e.salary",
					"e.bonus",
					"e.photo"
				)
				.innerJoin("departments AS d", "e.department", "d.id")
				.where("d.id", id);

		return data.length ?
			res.status(200).json(data) :
			res.status(404).end(status_messages.UNKNOWN_ERROR);

	} catch (err) {
		console.error(err);
		return res.status(500).end(status_messages.DATABASE_ERROR);
	}

}

module.exports = {
	list_all_departments,
	list_single_department,
	create_department,
	update_department,
	delete_department,
	get_department_employees
};
