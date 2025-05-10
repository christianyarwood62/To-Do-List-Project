// js file to handle all data for the to do lists and projects

import { format } from "date-fns";

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

    addItemToArrayTest() {
        console.log('data test')
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