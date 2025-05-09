import * as DOM from "./DOM.js"

export class ListView {
    constructor(listTitle, priority) {
        this.listTitle = listTitle;
        this.priority = priority;
    }

    renderListView() {
        // console.log('test');
    }

    renderListTemplate() {
        const content = DOM.selectElement('#content');
        const listDiv = DOM.createElement('div', undefined, 'list-div');


        const pageHeader = DOM.createElement('h1', undefined, 'page-header', 'To Do List');
        content.appendChild(pageHeader);
        content.appendChild(listDiv);

        const itemHeadersDiv = DOM.createElement('div', undefined, 'item-list-headers')
        listDiv.appendChild(itemHeadersDiv);

        const itemNameHeader = DOM.createElement('h2', 'list-header', 'list-title-column', 'To Do Item:');
        itemHeadersDiv.appendChild(itemNameHeader);

        const itemPriorityHeader = DOM.createElement('h2', 'list-header', 'list-priority-column', 'Priority:');
        itemHeadersDiv.appendChild(itemPriorityHeader);

        const completeCheckbox = DOM.createElement('h2', 'list-header', 'list-checkbox-column', 'Completed:');
        itemHeadersDiv.appendChild(completeCheckbox);
    }
}