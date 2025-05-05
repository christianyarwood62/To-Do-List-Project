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
    const projectDueDate = document.createElement('h2');
    const projectTitle = document.createElement('h2');
    const projectListNoHeader = document.createElement('div');
    projectHeaders.classList.add('projects-list-row');
    projectTitle.classList.add('project-title-column');
    projectDueDate.classList.add('project-date-column');
    projectListNoHeader.classList.add('project-list-content');

    projectTitle.textContent = 'Project';
    projectHeaders.appendChild(projectTitle);

    projectDueDate.textContent = 'Due Date';
    projectHeaders.appendChild(projectDueDate);

    projectsList.appendChild(projectHeaders);
    projectsList.appendChild(projectListNoHeader);
}