export function showSideBar() {
    const sideBarDiv = document.querySelector('#sidebar');
    const sideBarTitle = document.createElement('h2');
    const sidebarProjectContent = document.createElement('div');
    sidebarProjectContent.classList.add('sidebar-project-content')
    sideBarTitle.textContent = 'Projects';
    sideBarDiv.appendChild(sideBarTitle); 
    sideBarDiv.appendChild(sidebarProjectContent);

}

export function addProjectToSidebar() {
    const sidebarProjectContent = document.querySelector('.sidebar-project-content');
    sidebarProjectContent.innerHTML = '';
    projectTable.forEach(project => {
        const sidebar = document.querySelector('#sidebar');
        const sidebarProject = document.createElement('h3');
        sidebarProject.textContent = project.title;
        sidebarProjectContent.appendChild(sidebarProject);
    });

}