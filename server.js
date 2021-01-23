const mysql = require('mysql2');
const inquirer = require('inquirer');
// const {optionDepartment, } = require('./lib/department.js')
const { viewDepartments, confirmDepartment} = require('./lib/department.js');
const ConfirmPrompt = require('inquirer/lib/prompts/confirm');
// const { writeFile, copyFile } = require('./utils/generate-site.js');


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
});

//Opening promt questions
const promptUser = () => {
    return inquirer
    .prompt([
        {
        type: "list",
        name: "promptOptions",
        message: "What would you like to do?",
        choices: [' View all departments', 'view all roles', 'view all employees', ' add a department', 'add a role',
        ' add an employee', 'update an employee role'
        ],
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please choose an option !');
              return false;
            }
          }
        }
    ])
}

function init() {
    promptUser().then(userAnswers => {
        switch (userAnswers.promptOptions) {
            case " View all departments":
                viewDepartments()
                //query to view all departments in database
                break;
            case " add a department":
                // run Engineer prompts func
                confirmDepartment()
                break;
            // case "Intern":
            //     // run Intern prompts func
            //     createIntern()
            //     break;
            default: // EXit
                // generateHTML(employeeArray)
                console.log('Congratulations, your team is complete!')
            
        }
    })

}

init();


