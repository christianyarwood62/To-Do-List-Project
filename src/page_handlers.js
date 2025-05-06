export function renderProjects() {
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

export function renderFrontPage() {
    const content = document.querySelector('#content');

    // Creates the title for the front page
    const titleDiv = document.createElement('div');
    const frontPageTitle = document.createElement('h1');
    frontPageTitle.textContent = 'To Do Items';
    content.appendChild(titleDiv);
    titleDiv.appendChild(frontPageTitle);

    // Add a button to add a item to the table
    const addItemBtn = document.createElement('button');
    addItemBtn.textContent = 'Add an Item';
    addItemBtn.classList.add('add-item-btn');
    titleDiv.appendChild(addItemBtn);

    // Create an area to hold the items
    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items-list')
    content.appendChild(itemsDiv);

    // Create a row of headers for the item list
    const itemsList = document.querySelector('.items-list');
    const itemsHeaders = document.createElement('div');
    const itemsDueDate = document.createElement('h2');
    const itemsTitle = document.createElement('h2');
    const itemsListNoHeader = document.createElement('div');
    itemsHeaders.classList.add('items-list-row');
    itemsTitle.classList.add('item-title-column');
    itemsDueDate.classList.add('item-date-column');
    itemsListNoHeader.classList.add('items-list-content');

    itemsTitle.textContent = 'Item';
    itemsHeaders.appendChild(itemsTitle);

    itemsDueDate.textContent = 'Due Date';
    itemsHeaders.appendChild(itemsDueDate);

    itemsList.appendChild(itemsHeaders);
    itemsList.appendChild(itemsListNoHeader);
}