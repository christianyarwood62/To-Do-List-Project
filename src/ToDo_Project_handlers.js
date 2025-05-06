import { ToDoProject } from "./classes";
import { format } from "date-fns";
import { addProjectToSidebar } from "./sidebar";

// Function to display a prompt for adding a new project
export function showProjectDialog() {
    const projectDialog = document.querySelector('#project-dialog');
    projectDialog.showModal();

}

export function addProjectToArray() {
    const projectTitle = document.querySelector('#project-title-input').value;
    const projectDueDate = document.querySelector('#project-duedate-input').value;
    // const projectChecked = false;
    const newProject = new ToDoProject(false, projectTitle, projectDueDate);
    projectTable.push(newProject);
}

export function refreshProjectList() {
    projectTable.forEach(element => {
        const projectsList = document.querySelector('.projects-list');
        const project = document.createElement('div');
        const projectListNoHeader = document.querySelector('.project-list-content');
        project.classList.add('projects-list-row');
    
        const newProjectTitle = document.createElement('p');
        const newProjectDueDate = document.createElement('p');
        const projectChecked = document.createElement('input')
        newProjectTitle.classList.add('project-title-column');
        newProjectDueDate.classList.add('project-date-column');
        newProjectTitle.textContent = element.title;
        newProjectDueDate.textContent = element.dueDate;
        project.appendChild(newProjectTitle);
        project.appendChild(newProjectDueDate);
        projectListNoHeader.appendChild(project);

        // Create a remove button for each project
        const removeProjectBtn = document.createElement('p');
        removeProjectBtn.classList.add('remove-project-btn');
        removeProjectBtn.textContent = 'X';
        project.appendChild(removeProjectBtn);
        
        // Event: click on the X to remove the project from the table
        removeProjectBtn.addEventListener('click', () => {
            removeProjectFromTable(element);
            const content = document.querySelector('.project-list-content');
            content.innerHTML = '';
            refreshProjectList();
        })

        // Add the project to the sidebar
        addProjectToSidebar();
    });
}

function removeProjectFromTable(project) {
    const confirmDelete = confirm('Are you sure you want to remove this project?');
    if (confirmDelete) {
        const id = projectTable.findIndex(item => item.id === project.id);
        if (id !== -1) {
            projectTable.splice(id, 1);
        }
    }
}