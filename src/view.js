import { add } from "date-fns";
import * as DOM from "./DOM.js"
import { itemArray } from "./data.js";

export class ListView {
    constructor() {
        if (!new.target) {
            throw Error("You must use the 'new' keyword!");
        }
        this.itemTableContent = document.querySelector('#item-table-content');
        this.form = document.querySelector('#item-form');
        this.itemInput = document.querySelector('#item-title-input');
        this.itemPriority = document.querySelector('#item-priority-input');
        this.itemTitleInList = document.querySelector('.item-title-in-table');
        this.itemRow = document.querySelector('.items-list-row');
    }

    renderListTemplate() {
        const content = DOM.selectElement('#content');
        const listDiv = DOM.createElement('div', undefined, 'list-div');

        const pageHeader = DOM.createElement('h1', undefined, 'page-header', 'To Do List');
        const addItemBtn = DOM.createElement('button', undefined, 'add-item-btn', 'Add an Item');

        content.appendChild(pageHeader);
        content.appendChild(addItemBtn);
        addItemBtn.addEventListener('click', () => {
            this.showItemForm();
        })

        content.appendChild(listDiv);

        const itemHeadersDiv = DOM.createElement('div', undefined, 'item-list-headers')
        listDiv.appendChild(itemHeadersDiv);

        const itemNameHeader = DOM.createElement('h2', 'list-header', 'item-title-column', 'To Do Item:');
        itemHeadersDiv.appendChild(itemNameHeader);

        const itemPriorityHeader = DOM.createElement('h2', 'list-header', 'item-priority-column', 'Priority:');
        itemHeadersDiv.appendChild(itemPriorityHeader);

        const completeCheckbox = DOM.createElement('h2', 'list-header', 'item-completed-column', 'Completed:');
        itemHeadersDiv.appendChild(completeCheckbox);

        const itemTableContent = DOM.createElement('div', undefined, 'item-table-content');
        content.appendChild(itemTableContent);
    }

    showItemForm() {
        const itemDialog = DOM.selectElement('#item-dialog');
        itemDialog.show();
    }

    renderTodos(todoArray) {
        const itemTableContent = DOM.selectElement('#item-table-content');
        itemTableContent.innerHTML = '';
        todoArray.forEach(todoItem => {
            const itemDiv = DOM.createElement('div', 'items-list-row');
            itemTableContent.appendChild(itemDiv);
    
            const itemTitleInTable = DOM.createElement('p', 'item-title-in-table', 'item-title-column', `${todoItem['itemTitle']}`);
            const itemPriorityInTable = DOM.createElement('p', 'item-priority-in-table', 'item-priority-column', `${todoItem['itemPriority']}`);
            const itemCompletedInTable = DOM.createElement('button', 'item-complete-btn-in-table', 'item-completed-column', 'Incomplete');
            if (todoItem['checked'] === true) {
                itemTitleInTable.classList.add('completed');
                itemPriorityInTable.classList.add('completed');
                itemCompletedInTable.textContent = 'Completed!';
                itemDiv.style.opacity = '40%';
            }

            itemDiv.appendChild(itemTitleInTable);
            itemDiv.appendChild(itemPriorityInTable);
            itemDiv.appendChild(itemCompletedInTable);

            itemCompletedInTable.addEventListener('click', () => {
                this.onToggleStatus(todoItem);
            })
        });
    }
}