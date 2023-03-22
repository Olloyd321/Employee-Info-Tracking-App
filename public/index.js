const inquirer = require('inquirer'); // inquirer package 
console.log("Welcome to the employee tracker app, answer all prompts to continue");

const questions = [
    // name of project 
    {
        type: 'input',
        name: ' ',
        // message: ' employee?????',

    },
    // description of project
    {
        type: 'input',
        name: ' ',
        // message: ' employee salary?????',

    },
    // Installation
    {
        type: 'input',
        name: ' ',
        // message: ' employee role?????

    },
    // usage of project
    {
        type: 'input',
        name: ' ',
        // message: ' employee department?????

    },
    // license for project
    {
        type: 'list',
        name: 'license',
        message:'Please select a license for your project',
        choices: licenses,
    },
    // contributing
    {
        type: 'input',
        name: 'contributing',   
        message:'Please list any contribution guidelines'
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to perform tests?',
        default: 'npm test'
    },
    // github username 
    {
        type: 'input',
        name: 'githubUserName',
        message:'Please enter your github user name'

    },
    // user email 
    {
        type: 'input',
        name: 'UserEmail',
        message:'Please enter your email address, or skip and the user will be directed to your github'

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join (process.cwd(), fileName), data);  

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Successful! ReadMe generated.');
        writeToFile('NEWREADME.md', generateMarkdown({
            ...responses
        }));
    });
};

// Function call to initialize app
init();
