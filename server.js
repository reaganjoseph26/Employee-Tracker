const mysql = require('mysql2');
const inquirer = require('inquirer');
const { viewDepartments, confirmDepartment, exit, ViewByDepartment} = require('./lib/department.js');
const {viewRoles, confirmRole} = require('./lib/role.js')
const {viewEmployees, confirmEmployee} = require('./lib/employee.js')


// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    // port: 3006,
    user: 'root',
    password: 'UT}G5?C5!OzWRw7dvw{&#Y8~?2',
    database: 'employeetracker'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    promptUser();
})


function promptUser() {
    inquirer
    .prompt({
        type: "list",
        name: "promptOptions",
        message: "What would you like to do?",
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role',
            'Add an employee', 'View employee by Department', 'Exit']
    })
    .then(userAnswers => {
            switch (userAnswers.promptOptions) {
            case "View all departments":
            viewDepartments()
            //query to view all departments in database
            break;

            case "View all roles":
            viewRoles()
            break;

            case "View all employees":
            viewEmployees()
            break;
            case "Add a department":
            // run function to add department
            confirmDepartment()
            break;

            case "Add a role":
            confirmRole()
            break;

            case "Add an employee":
            confirmEmployee()
            break;

            case "View employee by Department":
                ViewByDepartment()
                    break;
            case "Exit":
            process.exit()
            break;

        }
    })
};


module.exports = promptUser