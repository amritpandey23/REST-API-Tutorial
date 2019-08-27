const
    colors = require("colors/safe");

module.exports = {

    // employee
    EMPLOYEE_NOT_FOUND: function(id) { return `employee id: ${id}, not found` },
    EMPLOYEE_DELETED: function(id) { return `employee id: ${id}, was deleted` },
    EMPLOYEE_UPDATED: function(id) { return `employee id: ${id}, was updated` },
    EMPLOYEE_CREATED: `employee created successfully`,

    // database
    COLUMNS_REQ: function(columns) { return `field values required: ${columns.join(' ')}` },

    // HTTP methods
    GET: function(desc) { return colors.cyan(`GET: ${desc}`) },
    POST: function(desc) { return colors.green(`POST: ${desc}`) },
    PATCH: function(desc) { return colors.yellow(`PATCH: ${desc}`) },
    DELETE: function(desc) { return colors.red(`DELETE: ${desc}`) },
    PUT: function(desc) { return colors.magenta(`PUT: ${desc}`) },

    // unknown
    UNKNOWN_ERROR: `unknown error occured`
}