import { format } from "date-fns";
import { projectTable } from "./project_data_handlers";
// import { addItemToSidebar } from "./sidebar";

export const itemTable = [];

export class ToDoItem {
    constructor(checked, title, dueDate) {
        let checkedInput = false;
        this.checked = checkedInput;
        this.title = title;
        this.dueDate = dueDate;
        this.id = crypto.randomUUID();
    }
}

// Function: to add a new item from a prompt to an array of to do items
export function addItemToArray() {
    const itemTitle = document.querySelector('#item-title-input').value;
    const itemDueDate = document.querySelector('#item-duedate-input').value;
    const newItem = new ToDoItem(false, itemTitle, itemDueDate);
    itemTable.push(newItem);
    projectTable.items.push(itemTable);
    console.log(projectTable);
}

export function addItemsToProject() {

}

// Function: when clicking the remove button on a to do item, removes it from the array
export function removeItemFromArray(element) {
    const confirmDelete = confirm('Are you sure you want to remove this item?');
    if (confirmDelete) {
        const itemIndex = itemTable.findIndex(item => item.id === element.id);
        // console.log(ToDoItem.id);
        // console.log()
        if (itemIndex !== -1) {
            itemTable.splice(itemIndex, 1);
        }
    }
}

// Function: Adds the generic to do items to an array for an object of a project of generic to do items
function addToDoItemstoProjectArray() {

}