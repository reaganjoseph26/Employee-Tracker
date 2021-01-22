const inquirer = require('inquirer');

const optionDepartment = () => {
    return inquirer.prompt([
    {
        type: 'checkbox',
        name: 'addDepartment',
        questions: 'Would you like to add a department?',
        choices: ['yes', 'no'],
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please select a type of employee.')
                return false;
            }
        }
    }
])
}

const confirmDepartment = () => {
    return inquirer.prompt([
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
    }
])
}


function runDepartment() {
    optionDepartment().then(userAnswers => {
        switch (userAnswers.departmentName) {
            case "Department":
                confirmDepartment()
                // run Manager prompts func
                break;
            
            default: // EXit
               
                console.log('Congratulations, your team is complete!')
            
        }
    })

}

module.exports = runDepartment()