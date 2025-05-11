// js file to handle all data for the to do lists and projects

import { format } from "date-fns";

// Initialise an empty array for projects to populate
export const  projectsArray = [];

export class ToDoList {
    constructor(itemTitle, itemPriority) {
        if (!new.target) {
            throw Error("You must use the 'new' keyword!");
        }
        this.itemTitle = itemTitle;
        this.itemPriority = itemPriority;
        this.checked = false;
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
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.toDoItems = [];
        this.id = crypto.randomUUID();
    }
}