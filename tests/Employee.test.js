// Import Employee class from Employee file
const Employee = require('../lib/employee');

// TEST OBJECT CREATION!

// Test object instantiation
test('A new employee object can be created', () => {
    const employeeObject = new Employee();
    expect(typeof employeeObject).toBe('object');
});

// Test name added to object
test('A name can be added as a property to an Employee Object', () => {
    const name = 'John Doe';
    const employeeObject = new Employee(name);
    expect(employeeObject.name).toBe('John Doe');
});

// Test id added to object
test('An ID can be added as a property to an Employee Object', () => {
    const id = 1234;
    const employeeObject = new Employee('John Doe', id);
    expect(employeeObject.id).toBe(1234);
});

// Test email added to object
test('An email can be added as a property to an Employee Object', () => {
    const email = 'johndoe@example.com';
    const employeeObject = new Employee('John Doe', 1234, email);
    expect(employeeObject.email).toBe('johndoe@example.com');
});

// Test imgSrc added to object
test('An imgSrc can be added as a property to an Employee Object', () => {
    const imgSrc = './../assets/employee_imgs/john-doe.jpg';
    const employeeObject = new Employee('John Doe', 1234, 'johndoe@example.com', imgSrc);
    expect(employeeObject.imgSrc).toBe('./../assets/employee_imgs/john-doe.jpg');
});

// Test that the correct role has been added
test('Employee has been added as the value for the property of role', () => {
    const returnValue = 'Employee';
    const employeeInstance = new Employee('John Doe', 1234, 'johndoe@example.com');
    expect(employeeInstance.getRole()).toBe(returnValue);
});

// TEST METHODS!

// Test getName() method
test('name is retrieved through getName() method', () => {
    const testName = 'John Doe';
    const employeeObject = new Employee(testName);
    expect(employeeObject.getName()).toBe(testName);
});

// Test getId() method
test('id is retrieved through getId() method', () => {
    const testID = 1234;
    const employeeInstance = new Employee('John Doe', testID);
    expect(employeeInstance.getId()).toBe(testID);
});

// Test getEmail() method
test('email is retrieved through getEmail() method', () => {
    const testEmail = 'johndoe@example.com';
    const employeeInstance = new Employee('John Doe', 1234, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
});

// test imgSRC
test('imgSrc value is retrieved through getImgSrc() method', () => {
    const testImgSrc = './../assets/employee_imgs/john-doe.jpg';
    const employeeObject = new Employee('John Doe', 1234, 'johndoe@example.com', testImgSrc);
    expect(employeeObject.getImgSrc()).toBe(testImgSrc);
});