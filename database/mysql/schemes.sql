CREATE DATABASE rest_app_node;

USE rest_app_node;

CREATE TABLE IF NOT EXISTS departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45),
  location VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(50) NOT NULL,
  salary VARCHAR(45) NOT NULL,
  address VARCHAR(45) NULL,
  hired DATETIME NULL,
  dob DATETIME NULL,
  bonus INT NULL,
  photo VARCHAR(45) NULL,
  department INT NULL,
  PRIMARY KEY (id)
);
