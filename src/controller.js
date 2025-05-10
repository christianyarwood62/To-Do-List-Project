// js file to handle all intermediate actions between the data and the view

import { ToDoItem, itemArray } from "./data";
import { selectElement } from "./DOM";
import { ListView } from "./view";

export class PageController {
    constructor() {
        this.view = new ListView;
        this.toDoList = new ToDoItem;

        this.toDoList.getTodoItems(itemArray);
        this.view.renderListTemplate();
        this.view.renderTodos(itemArray);

        const addItemToContentBtn = selectElement('#add-item-to-table-btn');
        addItemToContentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.performAddTodo();
        })
    }

    performAddTodo() {
        const itemTitleInput = document.querySelector('#item-title-input').value;
        const itemPriorityInput = document.querySelector('#item-priority-input').value;
        this.toDoList.addItemToArray({checked: false, itemTitle: `${itemTitleInput}`, itemPriority: `${itemPriorityInput}`});
        this.view.renderTodos(itemArray);
    }
}