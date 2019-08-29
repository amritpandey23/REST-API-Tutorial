# REST API with Node.js & Express

## :book: REST

- REST stands for **RE**presentational **S**tate **T**ransfer.
- Representation is of a resource(data). 
- Transfer takes place from server to an application state.
- REST is stateless i.e. state is not managed by server.

## :book: Resources

- Resources are key business decision. eg. payments, orders, products etc.
- Resource entity is always declared in plural.
- An entity is not a single object.
```http
    http://domain.com/api/product/1     // wrong
    http://domain.com/api/products/1    // right
```
- Entity can be composed of multiple data source.

## :book: RESTful Application

- Application that uses REST standards.
- Utilisizes HTTP or similar protocol.
- Uses HATEOAS.

## :book: HTTP

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

## :book: GraphQL

- Query language for REST API.
- Complements REST but not replace it.
- Acts as a middle man between REST API response and Client.

## :book: Authentication and Authorisation

- Authentication is to verify a user
- Authorisation is to verify access to a user.
- Authentication is done via API keys, OAuth tokens or JWT.
- OAuth stands for Open authentication.
- JWT stands for JSON web tokens.
- JWT have base 64 encoded data.
- JWT = [header.payload.signature].

## :book: Resource Identifier

- URI stands for Uniform Resource Identifier. eg.
```http
http://domain.com/api/departments/1
```

## :book: Express.js

- Express is a Node.js web server.
- It can handle routes.
- Have HTTP utilities.
- Have middlewares.

## :book: Query Strings and Parameters

- Following URI have a query paramter `id`.
```http
http://domain.com/api/products/:id
```
Following URI have a query string argument `orderBy`.
```http
http://domain/api/products?orderBy=price:ASV
```

## :book: Relational Databases

- RDMS was invented by Edgar F. Codd of IBM.
- RDMS have following features:

    1. Tables
    2. Rows
    3. Columns
    4. Relationships
    5. Datatypes
    6. Keys: Primary, Foreign.
- Relationships can be of following types:

    1. One-to-One
    2. One-to-Many
    3. Many-to-Many

## :book: SQL

- SQL stands for Structured Query Language.
- SQL is used to manage RDMS databases like MySQL, MariaDB, PostgreSQL etc.
- It has following features:

    1. Database manager.
    2. Table manager.
    3. Index manager.
    4. System manager.
    5. User manager.

## :computer: Mini SQL Tutorial

MySQL server is by default hosted on port `3306`. Login to mysql shell with
```sql
$ mysql -u root -p
```

### Creating database
```sql
CREATE DATABASE my_db;
```

### Creating table
```sql
USE my_db;

CREATE TABLE my_table (
    id INT NOT NULL AUTO_INCREMENT,
    column1 VARCHAR(50),
    column2 DATETIME,
    PRIMARY KEY(id)
);
```

### Inserting data in table
```sql
INSERT INTO my_table
(column1, column2) VALUES
("something", "1980-09-22");
```

### Updating data in table
```sql
UPDATE my_table
SET column1 = "nothing"
WHERE id = 1;
```

### Deleting data from table
```sql
DELETE FROM my_table
WHERE id = 1;
```

### Query data from table
```sql
SELECT column1, column2 FROM my_table;
```

### Join two tables
```sql
SELECT a.column1, b.column1
FROM my_table AS a
INNER JOIN my_table2 AS b
ON a.id = b.id;
```

## :no_entry_sign: Key challenges with RDMS

- Strict scheme.
- Ever changing data requirements.
- Data marts and lakes -- how to update them?