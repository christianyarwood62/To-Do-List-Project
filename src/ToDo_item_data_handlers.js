import { format } from "date-fns";
// import { addItemToSidebar } from "./sidebar";

const projectTable = [{'project title': 'generic-items', items: []}];
export const itemTable = [];
projectTable[0].items.push(itemTable);
// console.log(projectTable[0].items);

// function createProject() {
//     const project = {'project title': 2, 'items': 2}
//     console.log(project);
// }
// createProject();
// // export function addProjectToArray() {
// //     createItemTable();
// // }


// export function addItemsToProject() {
//     const newItemsArray = [];
//     projectTable.items = [];
//     console.log(projectTable);
// }
// addItemsToProject();

export class ToDoItem {
    constructor(checked, title, dueDate) {
        let checkedInput = false;
        this.checked = checkedInput;
        this.title = title;
        this.dueDate = dueDate;
        this.id = crypto.randomUUID();
    }
}

export class ToDoProject {
    constructor(projectTitle, toDoItems, dueDate) {
        this.projectTitle = projectTitle;
        this.toDoItems = [];
        this.dueDate = dueDate;
    }

    addItemToProjectList(item) {
        this.toDoItems.push([item]);
    }

    displayProject() {
        const test = document.createElement('p');
        test.textContent = this.projectTitle;
        // testnew.textContent = 'test';
        // test.appendChild(testnew);
    }
}

const firstProject = new ToDoProject('Generic To Do List', [],'01/01');
const newItem = new ToDoItem(false, 'first Item', '01/01');
const item2 = new ToDoItem(false, '2nd Item', '02/02');
firstProject.addItemToProjectList(newItem);
firstProject.addItemToProjectList(item2);
console.log(firstProject);
firstProject.displayProject();

// Function: to add a new item from a prompt to an array of to do items
export function addItemToArray() {
    const itemTitle = document.querySelector('#item-title-input').value;
    const itemDueDate = document.querySelector('#item-duedate-input').value;
    const newItem = new ToDoItem(false, itemTitle, itemDueDate);
    itemTable.push(newItem);
    // projectTable.push(itemTable);
    console.log(projectTable);
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