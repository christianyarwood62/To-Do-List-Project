// js file to handle all intermediate actions between the data and the view

import { ToDoItem, itemArray } from "./data";
import { ListView } from "./view";

export class PageController {
    constructor() {
        this.view = new ListView;
        this.toDoList = new ToDoItem;

        this.view.renderListTemplate();
        this.view.renderTodos(itemArray);

        this.performAddTodo();
        console.log(itemArray);
    }

    performAddTodo() {
        this.view.addItemToContent({itemTitle: 'second Title', itemPriority: 'Test priority', itemCompleted: false});
        this.toDoList.addItemToArray({itemTitle: 'second Title', itemPriority: 'Test priority', itemCompleted: false});
    }
}