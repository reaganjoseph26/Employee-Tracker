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


//view all departments 
const viewRoles = () => {connection.query(
    `SELECT * FROM role`,
    function(err, results) {
      console.log(results);
    }
  );
};

const confirmRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'Please provide the title of your role.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the title of your role (Required).')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'Enter this positions salary.',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Enter this positions salary (Required).')
                    return false;
                }
            }
        },
    ]).then(answers => {
        const query = connection.query(
            `INSERT INTO role (title, salary)
            VALUES (?, ?)
            `,
            [answers.roleTitle, answers.roleSalary],
            
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + ' role inserted!\n');
              
            }
          );
          // logs the actual query being run
          console.log(query.sql)
          //check if departmentname was reached from inquirer. should display department name
        //   console.log(answers.roleTitle, answers.roleSalary);
    
          
    })
}
 // ).then(
    //     inquirer.prompt(
    //         {
    //             type: 'list',
    //             name: 'roleDepartment',
    //             message: 'Enter the department for this role',
    //             choices:roleArr,

    //         },
    //     )

module.exports = {viewRoles, confirmRole}