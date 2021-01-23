DROP DATABASE IF EXISTS employeetracker;
CREATE DATABASE employeetracker;
USE employeetracker;

CREATE TABLE department(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INT,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE employee(
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);