// Import the Employee parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, imgSrc, gitHubUsername) {
        super(name, id, email, imgSrc);
        this.gitHubUsername = gitHubUsername;
        this.jobTitle = 'Engineer';
    }

    getGitHubUsername() {
        return this.gitHubUsername;
    }
}
module.exports = Engineer;