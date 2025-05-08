// import { refreshItemList } from "./page_handlers";
import { addProjectToArray } from "./project_data_handlers";
import { createItemTable } from "./ToDo_item_data_handlers";

export function showSideBar() {
    const sideBarDiv = document.querySelector('#sidebar');
    const sideBarTitle = document.createElement('h2');
    const sidebarProjectContent = document.createElement('div');
    sidebarProjectContent.classList.add('sidebar-projects-content')
    sideBarTitle.textContent = 'Projects';
    sideBarDiv.appendChild(sideBarTitle); 
    sideBarDiv.appendChild(sidebarProjectContent);

    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = 'Add a Project';
    sideBarDiv.appendChild(addProjectBtn);
    addProjectBtn.addEventListener('click', (event) => {
        const projectDialog = document.querySelector('#project-dialog');
        const projectForm = document.querySelector('#project-form');
        projectDialog.showModal();
        event.preventDefault();
    })

    // Create a sidebar project for generic to do items
    const sideBarGenericItems = document.createElement('h3');
    sideBarGenericItems.textContent = 'To Do Items';
    sideBarGenericItems.classList.add('generic-items-project');
    sideBarDiv.appendChild(sideBarGenericItems);
    sideBarGenericItems.addEventListener('click', () => {
        refreshItemList();
        console.log('test');
    })
}

// Event: Add a project to the sidebar
// const addProjectBtn

// export function addProjectToSidebar() {
//     const sidebarProjectContent = document.querySelector('.sidebar-projects-content');
//     sidebarProjectContent.innerHTML = '';
//     itemTable.forEach(project => {
//         const sidebar = document.querySelector('#sidebar');
//         const sidebarProject = document.createElement('h3');
//         sidebarProject.textContent = project.title;
//         sidebarProjectContent.appendChild(sidebarProject);
//     });
// 
// }