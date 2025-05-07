import "./styles.css";
import { renderGenericToDoList } from "./page_handlers.js";
import { showSideBar } from "./sidebar.js";

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
renderGenericToDoList();
showSideBar();

