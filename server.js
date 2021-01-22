const mysql = require('mysql2');
const runDepartment = require('./lib/department.js')


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

runDepartment()

// simple query
connection.query(
    `SELECT * FROM department`,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
);