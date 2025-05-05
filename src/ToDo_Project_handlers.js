import { ToDoProject } from "./classes";

// Creates a new instantiation of a project
export function addProjectToContent() {

}

// Function to display a prompt for adding a new project
export function showProjectDialog() {
    const projectDialog = document.querySelector('#project-dialog');
    projectDialog.showModal();
}

export function addProjectToTable() {
    const projectTitle = document.querySelector('#project-title-input').value;
    const projectDueDate = document.querySelector('#project-duedate-input').value;
    const newProject = new ToDoProject(projectTitle, projectDueDate);
    projectTable.push(newProject);
}