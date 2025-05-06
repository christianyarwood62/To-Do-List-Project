import "./styles.css";
import { ToDoItem, ToDoProject } from './classes.js';
import { renderFrontPage } from "./page_handlers.js";
import { showSideBar } from "./sidebar.js";
import { showItemDialog, addItemToArray, refreshItemList, removeItemFromTable} from "./ToDo_Project_handlers.js";

// Declares an empty array in the global scope (i.e. the window)
const itemTable = [];
if (typeof window !== 'undefined') {
    window.itemTable = itemTable;
}

// Initialise the front page with the projects area
renderFrontPage();
// showSideBar();

// Event: shows a dialog form for adding projects to a table
const addItemToList = document.querySelector('.add-item-btn');
addItemToList.addEventListener('click', () => {
    showItemDialog();
})

// Event: Add the input text for a new project to the table array
const itemDialog = document.querySelector('#item-dialog');
const addItemBtn = document.querySelector('#add-item-to-table-btn');
addItemBtn.addEventListener('click', (event) => {
    const itemListNoHeader = document.querySelector('.items-list-content');
    const itemForm = document.querySelector('#item-form');
    itemListNoHeader.innerHTML = '';
    event.preventDefault();
    addItemToArray();
    itemForm.reset();
    itemDialog.close();
    refreshItemList();
    // addItemToSidebar();
})