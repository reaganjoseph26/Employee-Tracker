const inquirer = require('inquirer');
const mysql = require('mysql2');

// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    // port: 3006,
    user: 'root',
    password: 'UT}G5?C5!OzWRw7dvw{&#Y8~?2',
    database: 'employeetracker'
});


//view all employees
const viewEmployees = () => {connection.query(
    `SELECT * FROM employee`,
    function(err, results) {
      console.log(results);
    }
  );
};

const confirmEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: 'Please provide the first name of this employee.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the first name of this employee(Required).')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: 'Please provide the last name of this employee.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the last name of this employee. (Required).')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: 'Enter the role of this employee',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the role of this employee. (Required).')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeManager',
            message: 'Enter the manager for this employee',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Enter the manager for this employee(Required).')
                    return false;
                }
            }
        },
    ]).then(answers => {
        const query = connection.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES (?, ?, ?, ?)
            `,
            [answers.employeeFirstName, answers.employeeLasttName, answers.employeeRole, answers.employeeManager],
            
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + ' role inserted!\n');
              
            }
          );
          // logs the actual query being run
          console.log(query.sql)
          
          
    })
}

module.exports = {viewEmployees, confirmEmployee}