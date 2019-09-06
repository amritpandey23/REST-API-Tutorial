const
  { gql } = require("apollo-server-express"),
  employeeSchema = require("./employee");

let linkSchema = gql`
  type Query {
    _: Boolean
  }
`;

module.exports = [ linkSchema, employeeSchema ];
