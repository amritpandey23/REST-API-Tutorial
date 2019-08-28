const
    colors = require("colors/safe");

module.exports = {

    // employee
    EMPLOYEE_CREATED: `employee created successfully`,
    EMPLOYEE_NOT_FOUND: function(id) { return `employee id: ${id}, not found` },
    EMPLOYEE_DELETED: function(id) { return `employee id: ${id}, was deleted` },
    EMPLOYEE_UPDATED: function(id) { return `employee id: ${id}, was updated` },

    // department
    DEPARTMENT_CREATED: `department created successfully`,
    NAME_REQ: `you need to add a name`,
    DEPARTMENT_NOT_FOUND: function(id) { return `department id: ${id}, not found` },
    DEPARTMENT_DELETED: function(id) { return `department id: ${id}, was deleted` },
    DEPARTMENT_UPDATED: function(id) { return `department id: ${id}, was updated` },

    // database
    COLUMNS_REQ: function(columns) { return `field values required: ${columns.join(' ')}` },
    DATABASE_ERROR: `error in database`,
    SQL_ERROR: function(err) { return colors.red(`SQL ERROR: ${err.sqlMessage}`) },

    // HTTP methods
    GET: function(desc) { return colors.cyan(`GET: ${desc}`) },
    POST: function(desc) { return colors.green(`POST: ${desc}`) },
    PATCH: function(desc) { return colors.yellow(`PATCH: ${desc}`) },
    DELETE: function(desc) { return colors.red(`DELETE: ${desc}`) },
    PUT: function(desc) { return colors.magenta(`PUT: ${desc}`) },

    // unknown
    UNKNOWN_ERROR: `unknown error occured in server`
}