import { format } from "date-fns";
// import { addItemToSidebar } from "./sidebar";

const projectTable = [{'project title': 'generic-items', items: []}];
export const itemTable = [];
projectTable[0].items.push(itemTable);
console.log(projectTable);
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

// Initialise an empty array for projects to populate
export const  projectsArray = [];

export class ToDoItem {
    constructor(checked, title, dueDate) {
        let checkedInput = false;
        this.checked = checkedInput;
        this.title = title;
        this.dueDate = dueDate;
        this.id = crypto.randomUUID();
    }

    addItemToArray(item) {
        itemTable.push(item);
        console.log('Successfully added an item to the Items Array');
        console.log(itemTable);
    }

    removeItemfromArray(item) {
        itemTable.splice(item, 1)
        console.log('Successfully removed an item to the Items Array');
    }

    displayItemInTable(itemCheck, itemTitle, itemDueDate) {
        const itemsList = document.querySelector('.items-list');
        const itemDiv = document.createElement('div');
        const itemListNoHeader = document.querySelector('.items-list-content');

        itemDiv.classList.add('items-list-row');
    
        const newItemTitle = document.createElement('p');
        const newItemDueDate = document.createElement('p');
        const itemChecked = document.createElement('input')
        newItemTitle.classList.add('item-title-column');
        newItemDueDate.classList.add('item-date-column');
        newItemTitle.textContent = itemTitle;
        newItemDueDate.textContent = itemDueDate;
        itemDiv.appendChild(newItemTitle);
        itemDiv.appendChild(newItemDueDate);
        itemListNoHeader.appendChild(itemDiv);

        // Create a remove button for each to do item
        const removeItemBtn = document.createElement('p');
        removeItemBtn.classList.add('remove-item-btn');
        removeItemBtn.textContent = 'X';
        itemDiv.appendChild(removeItemBtn);

        // Event: click on the X to remove the item from the table
        removeItemBtn.addEventListener('click', () => {
            console.log(itemTable);
            // removeItemFromArray(element);
            // const content = document.querySelector('.items-list-content');
            // content.innerHTML = '';
            console.log('test');
        })
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
        console.log('Successfully added a item to the project')
    }

    displayProject() {
        const test = document.createElement('p');
        test.textContent = this.projectTitle;
        // testnew.textContent = 'test';
        // test.appendChild(testnew);
    }

    addProjectToProjectArray() {
        projectsArray.push({projectTitle: this.projectTitle, toDoItems: this.toDoItems, dueDate: this.dueDate});
        console.log('successfully added a project to the project array');
    }

    // test() {
    //     console.log(projectsArray);
    // }
}


// const newItem = new ToDoItem(false, 'first Item', '01/01');
// const item2 = new ToDoItem(false, '2nd Item', '02/02');
// firstProject.addItemToProjectList(newItem);
// firstProject.addItemToProjectList(item2);
// console.log(firstProject);
// firstProject.displayProject();

// For use in DOM intialisation
export function createGenericItemsProject() {
    const firstProject = new ToDoProject('Generic To Do List', [],'01/01');
    // firstProject.test();
    console.log(firstProject);
}

// for use in DOM in initialisation
export function createProjectsArray() {
    const projectsArray = [];
    console.log(projectsArray);
    return projectsArray;
}


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