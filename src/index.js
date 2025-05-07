import "./styles.css";
import { ToDoItem, ToDoProject } from './classes.js';
import { renderFrontPage } from "./page_handlers.js";
import { showSideBar } from "./sidebar.js";
import { createItemObject, showItemDialog, addItemToArray, refreshItemList, removeItemFromTable, AddItemtoProjectArray} from "./ToDo_Project_handlers.js";

// // Declares an empty array for items in the global scope (i.e. the window)
// const itemTable = [];
// if (typeof window !== 'undefined') {
//     window.itemTable = itemTable;
// }

// // Declares an empty array for projects in the global scope (i.e. the window)
// const initialProjectTable = [];
// if (typeof window !== 'undefined') {
//     window.initialProjectTable = initialProjectTable;
// }

// Initialise the front page with the items area
renderFrontPage();
showSideBar();

