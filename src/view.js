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

export function showSideBar() {
    const sideBarDiv = document.querySelector('#sidebar');
    const sideBarTitle = document.createElement('h2');
    const sidebarProjectContent = document.createElement('div');
    sidebarProjectContent.classList.add('sidebar-projects-content')
    sideBarTitle.textContent = 'Projects';
    sideBarDiv.appendChild(sideBarTitle); 
    sideBarDiv.appendChild(sidebarProjectContent);

    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = 'Add a Project';
    sideBarDiv.appendChild(addProjectBtn);
    addProjectBtn.addEventListener('click', (event) => {
        // const projectDialog = document.querySelector('#project-dialog');
        // const projectForm = document.querySelector('#project-form');
        // projectDialog.showModal();
        // event.preventDefault();

        const project5 = new ToDoProject('test', [], '01/02/0202');
        project5.addProjectToProjectArray();
    })

    // Create a sidebar project for generic to do items
    const sideBarGenericItems = document.createElement('h3');
    sideBarGenericItems.textContent = 'To Do Items';
    sideBarGenericItems.classList.add('generic-items-project');
    sideBarDiv.appendChild(sideBarGenericItems);
    sideBarGenericItems.addEventListener('click', () => {
        // refreshItemList();
        console.log('test');
    })
}