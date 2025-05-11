// js file to handle all data for the to do lists and projects

import { format } from "date-fns";

// Initialise an empty array for projects to populate
export const  projectsArray = [];

export class ToDoItem {
    constructor(itemTitle, itemPriority) {
        if (!new.target) {
            throw Error("You must use the 'new' keyword!");
        }
        this.itemTitle = itemTitle;
        this.itemPriority = itemPriority;
        this.checked = false;
        this.id = crypto.randomUUID();
    }

    toggleItemCompletedStatus(item) {
        item.checked = !item.checked;
    }
}

export class ToDoProject {
    constructor(projectTitle, dueDate) {
        this.projectTitle = projectTitle;
        this.dueDate = dueDate;
        this.toDoItems = [];
        this.id = crypto.randomUUID();
    }
}