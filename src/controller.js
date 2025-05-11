// js file to handle all intermediate actions between the data and the view

import { ToDoList, itemArray } from "./data";
import { selectElement } from "./DOM";
import { ListView } from "./view";

export class PageController {
    constructor() {
        if (!new.target) {
            throw Error("You must use the 'new' keyword!");
        }
        this.view = new ListView;
        this.toDoList = new ToDoList;

        this.view.renderListTemplate();
        this.view.renderTodos(itemArray);

        this.view.onToggleStatus = (todoItem) => {
            this.toDoList.toggleItemCompletedStatus(todoItem);
            this.view.renderTodos(itemArray);
        };

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

    // performToggleCompletedStatus(item) {
    //     toggleCompletedStatus(item)
    // }
}