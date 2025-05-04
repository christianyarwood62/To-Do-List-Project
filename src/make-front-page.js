export function renderFrontPage() {
    const content = document.querySelector('#content');

    const titleDiv = document.createElement('div');
    const frontPageTitle = document.createElement('h1');
    frontPageTitle.textContent = 'Projects';
    content.appendChild(titleDiv);
    titleDiv.appendChild(frontPageTitle);

    const addProject = document.createElement('button');
    addProject.textContent = 'Add a Project';
    titleDiv.appendChild(addProject);
}