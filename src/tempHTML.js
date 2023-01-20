// create all the different team cards based off the inputs
const renderTeam = (team) => {
    // Create the manager card with the data inputs
    const renderManager = (manager) => `
                <div class="card col-3 me-3 mb-5 employee-card">
                    <img src="${manager.imgSrc}">
                    <div class="card-header employee-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-people-roof"></i> ${manager.title}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${manager.email}">${manager.email}</a>
                            </li>
                            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
        `;

    // Create the engineer card with the data inputs
    const renderEngineer = (engineer) => `
                <div class="card col-3 me-3 mb-5 employee-card">
                    <img src="${engineer.imgSrc}">
                    <div class="card-header employee-header">
                        <h2 class="card-title">${engineer.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-wrench"></i> ${engineer.title}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                            </li>
                            <li class="list-group-item">
                                GitHub:
                                <a href="https://github.com/${engineer.gitHub}" target="_blank"
                                    rel="noopener noreferrer">${engineer.gitHub}</a>
                            </li>
                        </ul>
                    </div>
                </div>
        `;

    // Create the intern card with the data inputs
    const renderIntern = (intern) => `
                <div class="card col-3 me-3 mb-5 employee-card">
                    <img src="${intern.imgSrc}">
                    <div class="card-header employee-header">
                        <h2 class="card-title">${intern.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-wrench"></i> ${intern.title}</h3>
                    </div>
                    <div class="card-body">
                    <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${intern.email}">${intern.email}</a>
                    </li>
                    <li class="list-group-item">
                        GitHub:
                        <a href="https://github.com/${intern.gitHub}" target="_blank"
                            rel="noopener noreferrer">${intern.gitHub}</a>
                    </li>
                </ul>
            </div>
        </div>
`;  

// Create an empty array for the html cards
const html = [];

// Add the manager to the empty array of HTML cards
html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => renderManager(manager)));

// Add the engineers to the array of HTML cards
html.push(
    team
        // filter out data so it only includes engineers
        .filter((employee) => employee.getRole() === 'Engineer')
        // Map all engineer data so that it displays as a html card
        .map((engineer) => renderEngineer(engineer))
);

// Add the interns to the array of HTML cards
html.push(
    team
        // filter out data so it only includes interns
        .filter((employee) => employee.getRole() === 'Intern')
        // Map all intern data so that it displays as a html card
        .map((intern) => renderIntern(intern))
);

// Join all the HTML cards and return them as one variable
return html.join('');
};