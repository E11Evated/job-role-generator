const Engineer = require('../lib/Engineer');

test('Engineer has been added as the value for the property of role', () => {
    const returnValue = 'Engineer';
    const employeeInstance = new Engineer(
        'John Doe',
        1234,
        'johndoe@example.com',
        'assets/app_img/engineer.jpg',
        'johndoe'
    );
    expect(employeeInstance.jobTitle).toBe(returnValue);
});

test('A GitHub username can be added to the Engineer object', () => {
    const testGithub = 'johndoe';
    const employeeInstance = new Engineer(
        'John Doe',
        1234,
        'johndoe@example.com',
        'assets/app_img/engineer.jpg',
        testGithub
    );
    expect(employeeInstance.gitHubUsername).toBe(testGithub);
});

test('GitHub username is retrieved through the getGitHubUsername() method', () => {
    const testGithub = 'johndoe';
    const employeeInstance = new Engineer(
        'John Doe',
        1234,
        'johndoe@example.com',
        'assets/app_img/engineer.jpg',
        testGithub
    );
    expect(employeeInstance.getGitHubUsername()).toBe(testGithub);
});