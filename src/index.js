import "./styles.css";
import { ToDoItem, ToDoProject } from './classes.js';
import { renderFrontPage } from "./page_handlers.js";
import { showSideBar, addProjectToSidebar } from "./sidebar.js";
import { showProjectDialog, addProjectToArray, refreshProjectList, removeProjectFromTable} from "./ToDo_Project_handlers.js";

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
    const projectListNoHeader = document.querySelector('.project-list-content');
    const projectForm = document.querySelector('#project-form');
    projectListNoHeader.innerHTML = '';
    event.preventDefault();
    addProjectToArray();
    projectForm.reset();
    projectDialog.close();
    refreshProjectList();
})


addProjectToSidebar()