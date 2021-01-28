const mysql = require('mysql2');
const inquirer = require('inquirer');
// const {viewRoles, confirmRole} = require('./role')
// const {viewEmployees, confirmEmployee} = require('./employee')
const promptUser = require('../server')

// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    // port: 3006,
    user: 'root',
    password: 'UT}G5?C5!OzWRw7dvw{&#Y8~?2',
    database: 'employeetracker'
});

const exit = () => {
    connection.end();
}


//view all departments 
const viewDepartments = () => {connection.query(
    `SELECT * FROM department`,
    function(err, results) {
      console.table(results)
      promptUser();
    }
  );
};


const confirmDepartment = () => {
    return inquirer.prompt(
    {
        type: 'input',
        name: 'departmentName',
        message: 'Please provide the name of your department. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please provide the name of your department.')
                return false;
            }
        }
    },
).then(answers => {
    const query = connection.query(
        `INSERT INTO department (name)
        VALUES (?)
        `,
        [answers.departmentName],
        
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + ' department inserted!\n');
          
          
        }
    ); 
    promptUser();
})
}

//view employee by department
function ViewByDepartment() {
    connection.query(
        `SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS name, department.name AS department
        FROM employee
        JOIN role 
        ON role.id = employee.role_id
        INNER JOIN department
        ON role.department_id = department.id`,
        function(err, res) {
            if (err) throw err;
            console.table(res);
            promptUser();
        }
    );    
}


module.exports = {viewDepartments, confirmDepartment, exit, ViewByDepartment};