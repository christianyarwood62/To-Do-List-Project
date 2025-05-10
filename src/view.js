import { add } from "date-fns";
import * as DOM from "./DOM.js"

export class ListView {
    constructor() {
        this.itemTableContent = document.querySelector('#item-table-content');
        this.form = document.querySelector('#item-form');
        this.itemInput = document.querySelector('#item-title-input');
        this.itemPriority = document.querySelector('#item-priority-input')
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
    
            const itemTitleInTable = DOM.createElement('p', undefined, 'item-title-column', `${todoItem['itemTitle']}`);
            const itemPriorityInTable = DOM.createElement('p', undefined, 'item-priority-column', `${todoItem['itemPriority']}`);
            const itemCompletedInTable = DOM.createElement('button', undefined, undefined, 'complete');
            itemDiv.appendChild(itemTitleInTable);
            itemDiv.appendChild(itemPriorityInTable);
            itemDiv.appendChild(itemCompletedInTable);
        });
    }

    addItemToContent(item) {
        const addItemBtn = DOM.selectElement('#add-item-to-table-btn');
        addItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const itemTableContent = DOM.createElement('div', undefined, 'item-table-content');
            const itemDiv = DOM.createElement('div', 'items-list-row');
            content.appendChild(itemTableContent);
            itemTableContent.appendChild(itemDiv);
    
            const itemTitleInTable = DOM.createElement('p', undefined, 'item-title-column', `${this.itemInput.value}`);
            const itemPriorityInTable = DOM.createElement('p', undefined, 'item-priority-column', `${this.itemPriority.value}`);
            const itemCompletedInTable = DOM.createElement('button', undefined, undefined, 'Complete');
            itemDiv.appendChild(itemTitleInTable);
            itemDiv.appendChild(itemPriorityInTable);
            itemDiv.appendChild(itemCompletedInTable);
        })
    }
}