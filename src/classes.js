export class ToDoProject {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }
}

export class ToDoItem {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }
}