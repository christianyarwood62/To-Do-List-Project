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
    projectHeaders.classList.add('projects-list-row')
    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Project';
    projectTitle.classList.add('project-title-column');
    projectHeaders.appendChild(projectTitle);
    const projectDueDate = document.createElement('h2');
    projectDueDate.textContent = 'Due Date';
    projectDueDate.classList.add('project-date-column');
    projectHeaders.appendChild(projectDueDate);
    projectsList.appendChild(projectHeaders);
    const projectListNoHeader = document.createElement('div');
    projectListNoHeader.classList.add('project-list-content');
    projectsList.appendChild(projectListNoHeader);
}

export function refreshProjectList() {
    projectTable.forEach(element => {
        const projectsList = document.querySelector('.projects-list');
        const project = document.createElement('div');
        const projectListNoHeader = document.querySelector('.project-list-content');
        project.classList.add('projects-list-row');
    
        const newProjectTitle = document.createElement('p');
        newProjectTitle.classList.add('project-title-column');
        const newProjectDueDate = document.createElement('p');
        newProjectDueDate.classList.add('project-date-column');
        newProjectTitle.textContent = element.title;
        newProjectDueDate.textContent = element.dueDate;
        project.appendChild(newProjectTitle);
        project.appendChild(newProjectDueDate);
        projectListNoHeader.appendChild(project);
    });
}