import { renderGenericToDoList } from "./page_handlers";

export function showSideBar() {
    const sideBarDiv = document.querySelector('#sidebar');
    const sideBarTitle = document.createElement('h2');
    const sidebarProjectContent = document.createElement('div');
    sidebarProjectContent.classList.add('sidebar-projects-content')
    sideBarTitle.textContent = 'Projects';
    sideBarDiv.appendChild(sideBarTitle); 
    sideBarDiv.appendChild(sidebarProjectContent);

    const sideBarGenericItems = document.createElement('h3');
    sideBarGenericItems.textContent = 'To Do Items';
    sideBarDiv.appendChild(sideBarGenericItems);

    sideBarGenericItems.addEventListener('click', () => {
        renderGenericToDoList();
    })

}

export function addProjectToSidebar() {
    const sidebarProjectContent = document.querySelector('.sidebar-projects-content');
    sidebarProjectContent.innerHTML = '';
    itemTable.forEach(project => {
        const sidebar = document.querySelector('#sidebar');
        const sidebarProject = document.createElement('h3');
        sidebarProject.textContent = project.title;
        sidebarProjectContent.appendChild(sidebarProject);
    });

}