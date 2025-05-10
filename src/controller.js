// js file to handle all intermediate actions between the data and the view

import { ToDoItem } from "./data";
import { ListView } from "./view";

const toDoArrayTest = [{itemTitle: 'test Title', itemPriority: 'Test priority', itemCompleted: false}];

export class PageController {
    constructor() {
        this.view = new ListView;
        this.toDoList = new ToDoItem;

        this.view.renderListTemplate();
        // this.performAddTodo();
        this.view.renderTodos(toDoArrayTest);
    }

    performAddTodo() {
        this.view.renderTodos();
        this.toDoList.addItemToArrayTest();
    }
}