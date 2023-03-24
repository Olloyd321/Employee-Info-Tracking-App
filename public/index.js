const inquirer = require('inquirer'); // inquirer package 
console.log("Welcome to the employee tracker app, answer all prompts to continue");

const inquirer = require('inquirer');
const mysql = require('mysql');

// connect to sql?
const connection = mysql.myNewDb({
  host: 'localhost',
  user: 'root',
  password: 'MyNewDb',
  database: 'employee_tracker_db',
});

// Connect to the db
connection.connect((err) => {
  if (err) throw err;
 });

// Main function that displays the menu and handles user input
function main() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What action would you like to perform?',
        choices: [
          'Exit',
          'View all employees',
          'View employees by department',
          'Add employee',
          'Remove employee',
          'Update employee role',
          'View employees by manager',
          'Update employee manager',
          
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'View employees by department':
          viewEmployeesByDepartment();
          break;
        case 'View employees by manager':
          viewEmployeesByManager();
          break;
        case 'Add employee':
          addEmployee();
          break;
        case 'Remove employee':
          removeEmployee();
          break;
        case 'Update employee role':
          updateEmployeeRole();
          break;
        case 'Update employee manager':
          updateEmployeeManager();
          break;
        case 'Exit':
          connection.end();
          break;
      }
    });
}

// Function to view all employees
function viewAllEmployees() {
  connection.query(
    `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role ON e.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee m ON e.manager_id = m.id`,
    (err, results) => {
      if (err) throw err;
      console.table(results);
      main();
    }
  );
}

// Function to view employees by department
function viewEmployeesByDepartment() {
  connection.query(
    `SELECT department.name AS department, e.id, e.first_name, e.last_name, role.title, role.salary
    FROM employee e
    LEFT JOIN role ON e.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    ORDER BY department.name`,
    (err, results) => {
      if (err) throw err;
      console.table(results);
      main();
    }
  );
}

// Function to view employees by manager
function viewEmployeesByManager() {
  connection.query(
    `SELECT CONCAT(m.first_name, ' ', m.last_name) AS manager, e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary
    FROM employee e
    LEFT JOIN role ON e.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee m ON e.manager_id = m.id
    ORDER BY manager`,
    (err, results) => {
      if (err) throw err;
      console.table(results);
      main();
    }
  );
}

// add a new employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "",
      }])};

function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join (process.cwd(), fileName), data);  

// }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Successful! ReadMe generated.');
    });
};


// initialize app
init();
