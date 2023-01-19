// packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Dist folder for CSS HTML
const DIST_DIR = path.resolve(__dirname, 'dist');
// Output file path and name
const outputPath = path.join(DIST_DIR, 'jobApp.html');

// Import HTML template
const templateHTML = require('./src/templateHTML');


// Prompt the user for team manager information
const manager = {};
manager.name = readline.question("Team manager's name: ");
manager.id = readline.question("Team manager's employee ID: ");
manager.email = readline.question("Team manager's email: ");
manager.officeNumber = readline.question("Team manager's office number: ");

// Initialize an empty team array
const team = [];

// Show the menu to add team members
while (true) {
  console.log("1. Add an engineer");
  console.log("2. Add an intern");
  console.log("3. Finish building team");
  const choice = readline.question("Enter your choice: ");

  if (choice === "1") {
    // Prompt for engineer information
    const engineer = {};
    engineer.name = readline.question("Engineer's name: ");
    engineer.id = readline.question("Engineer's ID: ");
    engineer.email = readline.question("Engineer's email: ");
    engineer.github = readline.question("Engineer's GitHub username: ");

    // Add the engineer to the team
    team.push(engineer);
  } else if (choice === "2") {
    // Prompt for intern information
    const intern = {};
    intern.name = readline.question("Intern's name: ");
    intern.id = readline.question("Intern's ID: ");
    intern.email = readline.question("Intern's email: ");
    intern.school = readline.question("Intern's school: ");

    // Add the intern to the team
    team.push(intern);
  } else if (choice === "3") {
    // Exit the loop and generate the HTML
    break;
  } else {
    console.log("Invalid choice. Please try again.");
  }
}

// Generate the HTML file
const html = generateHTML(manager, team);
fs.writeFileSync("team.html", html);
console.log("HTML file generated!");