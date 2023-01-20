// Import 
const Engineer = require('../lib/engineer');

// OBJECT TESTS  

// Test object instantiation
test('A new engineer object can be created', () => {
    const employeeObject = new Engineer();
    expect(typeof employeeObject).toBe('object');
});

// Test to see if a gitHub property has been created
test('A GitHub username can be added to the Engineer object', () => {
    const github = 'johndoe';
    const employeeInstance = new Engineer(
        'John Doe',
        1234,
        'johndoe@example.com',
        './../assets/employee_imgs/john-doe.jpg',
        github
    );
    expect(employeeInstance.gitHub).toBe('johndoe');
});

// Test to see if the property role has the value Engineer
test('Engineer has been added as the value for the property of role', () => {
    const returnValue = 'Engineer';
    const employeeInstance = new Engineer(
        'John Doe',
        1234,
        'johndoe@example.com',
        './../assets/employee_imgs/john-doe.jpg',
        'johndoe'
    );
    expect(employeeInstance.getRole()).toBe(returnValue);
});

// METHOD TESTS

// Test to see if getGitHub() method works
test('GitHub username is retrieved through the getGitHub() method', () => {
    const testGithub = 'johndoe';
    const employeeInstance = new Engineer(
        'John Doe',
        1234,
        'johndoe@example.com',
        './../assets/employee_imgs/john-doe.jpg',
        testGithub
    );
    expect(employeeInstance.getGitHub()).toBe(testGithub);
});