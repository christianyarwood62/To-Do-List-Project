// js file to handle all data for the to do lists and projects

import { format } from "date-fns";

export const itemArray = [];

// Initialise an empty array for projects to populate
export const  projectsArray = [];

export class ToDoList {
    constructor(itemTitle, itemPriority) {
        if (!new.target) {
            throw Error("You must use the 'new' keyword!");
        }
        this.itemTitle = itemTitle;
        this.itemPriority = itemPriority;
        this.id = crypto.randomUUID();
    }

    getTodoItems(todoItems) {
        return todoItems;
    }

    addItemToArray(item) {
        itemArray.push(item);
        console.log('Successfully added an item to the Items Array');
        console.log(item);
    }

    removeItemfromArray(item) {
        itemArray.splice(item, 1)
        console.log('Successfully removed an item to the Items Array');
    }

    toggleItemCompletedStatus(item) {
        item.checked = !item.checked;
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