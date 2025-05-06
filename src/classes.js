export class ToDoItem {
    constructor(checked, title, dueDate) {
        let checkedInput = false;
        this.checked = checkedInput;
        this.title = title;
        this.dueDate = dueDate;
        this.id = crypto.randomUUID();
    }
}

// export class ToDoItem {
//     constructor(title, description, dueDate, priority, checklist) {
//         this.title = title;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//         this.checklist = checklist;
//     }
// }