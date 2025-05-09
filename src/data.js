// js file to handle all data for the to do lists and projects

import { format } from "date-fns";
// import { addItemToSidebar } from "./sidebar";

export const itemArray = [];


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
        itemArray.push(item);
        console.log('Successfully added an item to the Items Array');
        console.log(itemArray);
    }

    removeItemfromArray(item) {
        itemArray.splice(item, 1)
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
            console.log(itemArray);
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
    }

    addProjectToProjectArray() {
        projectsArray.push({projectTitle: this.projectTitle, toDoItems: this.toDoItems, dueDate: this.dueDate});
        console.log('successfully added a project to the project array');
    }
}

// For use in DOM intialisation
export function createGenericItemsProject() {
    const firstProject = new ToDoProject('Generic To Do List', [],'01/01');
    console.log(firstProject);
}