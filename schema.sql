DROP DATABASE IF EXISTS employeetracker;
CREATE DATABASE employeetracker;
USE employeetracker;

CREATE TABLE department(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) references department(id)
);

CREATE TABLE employee(
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
FOREIGN KEY (role_id) references role(id),
manager_id INT UNSIGNED
);
