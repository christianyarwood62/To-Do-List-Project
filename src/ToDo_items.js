export function addToDoItemToArray() {
    const itemTitle = document.querySelector('#project-title-input').value;
    const projectDueDate = document.querySelector('#project-duedate-input').value;
    // const projectChecked = false;
    const newProject = new ToDoProject(false, projectTitle, projectDueDate);
    projectTable.push(newProject);
}