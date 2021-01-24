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
const viewDepartments = () => {connection.query(
    `SELECT * FROM department`,
    function(err, results) {
      console.table(results);
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
})
}


module.exports = {viewDepartments, confirmDepartment};