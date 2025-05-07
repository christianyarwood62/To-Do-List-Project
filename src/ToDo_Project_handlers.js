import { format } from "date-fns";
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

// function addItemToArray() {
//     const itemTitle = document.querySelector('#item-title-input').value;
//     const itemDueDate = document.querySelector('#item-duedate-input').value;
//     const newItem = new ToDoItem(false, itemTitle, itemDueDate);
//     itemTable.push(newItem);
// }

function AddItemtoProjectArray() {
    console.log(initialProjectTable);
}

const addItemtoArrayBtn = document.querySelector('#add-item-to-table-btn');
addItemtoArrayBtn.addEventListener('click', () => {
    const itemTitle = document.querySelector('#item-title-input').value;
    const itemDueDate = document.querySelector('#item-duedate-input').value;
    const newItem = new ToDoItem(false, itemTitle, itemDueDate);
    itemTable.push(newItem);
    console.log(itemTable);
})

function removeItemFromTable(item) {
    const confirmDelete = confirm('Are you sure you want to remove this item?');
    if (confirmDelete) {
        const id = itemTable.findIndex(item => item.id === item.id);
        if (id !== -1) {
            itemTable.splice(id, 1);
        }
    }
}

// export function createItemObject() {
//     const itemTable = [];
//     if (typeof window !== 'undefined') {
//         window.itemTable = itemTable;
//     }
//     // Declares an empty array for projects in the global scope (i.e. the window)
//     const initialProjectTable = [];
//     if (typeof window !== 'undefined') {
//         window.initialProjectTable = initialProjectTable;
//     }
// }