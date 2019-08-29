# REST API with Node.js & Express

## REST

- REST stands for **RE**presentational **S**tate **T**ransfer.
- Representation is of a resource(data). 
- Transfer takes place from server to an application state.
- REST is stateless i.e. state is not managed by server.

## Resources

- Resources are key business decision. eg. payments, orders, products etc.
- Resource entity is always declared in plural.
- An entity is not a single object.
```http
    http://domain.com/api/product/1     // wrong
    http://domain.com/api/products/1    // right
```
- Entity can be composed of multiple data source.

## RESTful Application

- Application that uses REST standards.
- Utilisizes HTTP or similar protocol.
- Uses HATEOAS.

## HTTP

- HTTP stands for Hypertext Transfer Protocol.
- It is used to send and retrive data through references in request and response objects.
- HTTP.GET and HTTP.DELETE are idempotent i.e. always does and returns same thing.
- HTTP.POST, HTTP.PUT and HTTP.PATCH are non-idempotent.

### HTTP Responses

- 10X : Information messages
- 20X : Success messages
- 30X : Redirection messages
- 40X : Client error messages
- 50X : Server error messages

### HTTP Methods

- GET : requesting data
- POST : creating data
- PATCH : updating data
- PUT : partially creating data
- DELETE : deleting data

## GraphQL

- Query language for REST API.
- Complements REST but not replace it.
- Acts as a middle man between REST API response and Client.

## Authentication and Authorisation

- Authentication is to verify a user
- Authorisation is to verify access to a user.
- Authentication is done via API keys, OAuth tokens or JWT.
- OAuth stands for Open authentication.
- JWT stands for JSON web tokens.
- JWT have base 64 encoded data.
- JWT = [header.payload.signature].

## Resource Identifiers

- URI stands for Uniform Resource Identifier. eg.
```http
http://domain.com/api/departments/1
```
