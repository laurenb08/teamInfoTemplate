const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");



//Ask user for manager info
function askUserforManagerInfo() {

    return inquirer.prompt([{
        type: "input",
        message: "What is your manager'sname?",
        name: "name",
    }, {
        type: "input",
        message: "What is your manager's ID?",
        name: "id",
    }, {
        type: "input",
        message: "What is your manager's email?",
        name: "email",
    }, {
        type: "input",
        message: "What is your office manager's number?",
        name: "officeNumber",
    }]).then((managerData) => {

        const newManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);

    });

}

//Ask user for next employee type
function askUserforEmployeeType() {

    // return inquirer.prompt([{
    //     type: "input",
    //     message: "What is your employee's name?",
    //     name: "name",
    // }, {
    //     type: "input",
    //     message: "What is your employee's ID?",
    //     name: "id",
    // }, {
    //     type: "input",
    //     message: "What is your employee's email?",
    //     name: "email",
    // }, {
    //     type: "input",
    //     message: "What school did you go to?",
    //     name: "school",
    // }])

}

//Ask User for Engineer Info
function askUserForEngineerInfo() {

    return inquirer.prompt([{
        type: "input",
        message: "What is your Engineer's name?",
        name: "name",
    }, {
        type: "input",
        message: "What is your Engineer's ID?",
        name: "id",
    }, {
        type: "input",
        message: "What is your Engineer's email?",
        name: "email",
    }, {
        type: "input",
        message: "What is your Engineer's GitHub username?",
        name: "gitHub",
    }])

}

//Ask user for Intern Info
function askUserforInternInfo() {

    return inquirer.prompt([{
        type: "input",
        message: "What is your Intern's name?",
        name: "name",
    }, {
        type: "input",
        message: "What is your Intern's ID?",
        name: "id",
    }, {
        type: "input",
        message: "What is your Intern's email?",
        name: "email",
    }, {
        type: "input",
        message: "Where did your Intern go to school?",
        name: "school",
    }])

}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


inquirer
    //intern
    .prompt([{
        type: "input",
        message: "What is your name?",
        name: "name",
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id",
    }, {
        type: "input",
        message: "What is your email?",
        name: "email",
    }, {
        type: "input",
        message: "What school did you go to?",
        name: "school",
    }])



What is your managers name, id, email, office Number,

    which type of team member would you like to add ? (Enginner, intern, I don't want to add any more team members)

what is your team members name, id, email, specific question