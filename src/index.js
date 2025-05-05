import "./styles.css";
import { ToDoItem, ToDoProject } from './classes.js';
import { renderFrontPage, refreshProjectList } from "./page_handlers.js";
import { showSideBar } from "./sidebar.js";
import { addProjectToContent, showProjectDialog, addProjectToTable } from "./ToDo_Project_handlers.js";

// Declares an empty array in the global scope (i.e. the window)
const projectTable = [];
if (typeof window !== 'undefined') {
    window.projectTable = projectTable;
}

// Initialise the front page with the projects area
renderFrontPage();
showSideBar();

// Event: shows a dialog form for adding projects to a table
const addProjectToList = document.querySelector('.add-project-btn');
addProjectToList.addEventListener('click', () => {
    showProjectDialog();
})

// Event: Add the input text for a new project to the table array
const projectDialog = document.querySelector('#project-dialog');
const addProjectBtn = document.querySelector('#add-project-to-table-btn');
addProjectBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addProjectToTable();
    projectDialog.close();
    refreshProjectList();
})




