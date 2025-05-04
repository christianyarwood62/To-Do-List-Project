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

    // Create columns for the project list
    const projectColumn = document.createElement('div');
    projectsDiv.appendChild(projectColumn);
    projectColumn.classList.add('project-list-column');
    const dueDateColumn = document.createElement('div');
    projectsDiv.appendChild(dueDateColumn);
    dueDateColumn.classList.add('project-duedate-column');

    // Create a project title header for the project table
    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Project';
    projectColumn.appendChild(projectTitle);

    // Create a due date header for the project table
    const projectDueDate = document.createElement('h2');
    projectDueDate.textContent = 'Due Date';
    dueDateColumn.appendChild(projectDueDate);
}