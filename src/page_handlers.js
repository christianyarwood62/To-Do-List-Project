export function renderFrontPage() {
    const content = document.querySelector('#content');

    // Creates the title for the front page
    const titleDiv = document.createElement('div');
    const frontPageTitle = document.createElement('h1');
    frontPageTitle.textContent = 'Projects';
    content.appendChild(titleDiv);
    titleDiv.appendChild(frontPageTitle);

    // Add a button to add a project to the table
    const addProject = document.createElement('button');
    addProject.textContent = 'Add a Project';
    addProject.classList.add('add-project-btn');
    titleDiv.appendChild(addProject);

    // Create an area to hold the projects
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects-list')
    content.appendChild(projectsDiv);

    // Create a row of headers for the project list
    const projectsList = document.querySelector('.projects-list');
    const projectHeaders = document.createElement('div');
    projectHeaders.classList.add('projects-list-headers')
    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Project';
    projectHeaders.appendChild(projectTitle);
    const projectDueDate = document.createElement('h2');
    projectDueDate.textContent = 'Due Date';
    projectHeaders.appendChild(projectDueDate);
    projectsList.appendChild(projectHeaders);
}

export function refreshProjectList() {
    projectTable.forEach(element => {
        const project = document.createElement('div');
        const newProjectTitle = document.createElement('p');
        const newProjectDueDate = document.createElement('p');
        newProjectTitle.textContent = element.title;
        newProjectDueDate.textContent = element.dueDate;
        
    });
}