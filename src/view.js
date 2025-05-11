import { add } from "date-fns";
import * as DOM from "./DOM.js"
import { ToDoList } from "./data.js";

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
        this.projectTitleElement = null;

        this.form.onsubmit = (e) => {
            e.preventDefault();
            const title = this.itemInput.value.trim();
            const priority = this.itemPriority.value.trim();
            if (!title || !priority) {
                window.alert('Please fill in all the fields');
                return;
            };
        
            this.onSubmitItem(title, priority);
        
            this.itemInput.value = '';
            this.itemPriority.value = '';
            document.querySelector('#item-dialog').close();
        };
    }

    renderListTemplate() {
        const content = DOM.selectElement('#content');
        content.innerHTML = '';
    
        const layout = DOM.createElement('div', undefined, 'layout');
        content.appendChild(layout);
    
        // Creating elements in the sidebar
        const sidebar = DOM.createElement('div', undefined, 'sidebar');
        const sidebarHeader = DOM.createElement('h2', undefined, undefined, 'Projects');
        const addProjectBtn = DOM.createElement('button', undefined, 'add-project-btn', 'Add Project');
        const projectList = DOM.createElement('ul', 'project-list', 'project-list');
        const closeSidebarBtn = DOM.createElement('button', 'close-sidebar-btn', undefined, 'X')
        sidebar.appendChild(closeSidebarBtn);
        sidebar.appendChild(sidebarHeader);
        sidebar.appendChild(addProjectBtn);
        sidebar.appendChild(projectList);
    
        // Creating elements in the main area of the page
        const main = DOM.createElement('div', undefined, 'main');
        const addItemBtn = DOM.createElement('button', undefined, 'add-item-btn', 'Add an Item');
        const itemTableContent = DOM.createElement('div', undefined, 'item-table-content');
        const sideBarNavigationBtn = DOM.createElement('button', 'sidebar-navigation-btn');
        const hamburgerIconDiv1 = DOM.createElement('div', 'sidebar-navigation-hamburger');
        const hamburgerIconDiv2 = DOM.createElement('div', 'sidebar-navigation-hamburger');
        const hamburgerIconDiv3 = DOM.createElement('div', 'sidebar-navigation-hamburger');
        sideBarNavigationBtn.appendChild(hamburgerIconDiv1);
        sideBarNavigationBtn.appendChild(hamburgerIconDiv2);
        sideBarNavigationBtn.appendChild(hamburgerIconDiv3);
        main.appendChild(sideBarNavigationBtn);
        main.appendChild(addItemBtn);
        main.appendChild(itemTableContent);

        this.projectTitleElement = DOM.createElement('h2', undefined, 'current-project-title', '');
        sideBarNavigationBtn.after(this.projectTitleElement);
    
        layout.appendChild(sidebar);
        layout.appendChild(main);
        sideBarNavigationBtn.onclick = DOM.openSidebar;
        closeSidebarBtn.onclick = DOM.closeSidebar;

        addItemBtn.addEventListener('click', () => this.showItemForm());
        addProjectBtn.addEventListener('click', () => this.onAddProject());
    }

    renderProjectList(projectArray) {
        const projectList = DOM.selectElement('#project-list');
        projectList.innerHTML = '';

        projectArray.forEach(project => {
            const projectItem = DOM.createElement('li', 'project-list-item', undefined, project.projectTitle);
            projectItem.addEventListener('click', () => {
                this.onSelectProject(project.id);
                if (this.projectTitleElement) {
                    this.projectTitleElement.textContent = project.projectTitle;
                }
            });
            projectList.appendChild(projectItem);
        });
    }

    showItemForm() {
        const itemDialog = DOM.selectElement('#item-dialog');
        itemDialog.show();
    }

    renderTodos(todoArray) {
        const itemTableContent = DOM.selectElement('#item-table-content');
        itemTableContent.innerHTML = '';

        const headerRow = DOM.createElement('div', undefined, 'item-list-headers');
        const titleHeader = DOM.createElement('p', 'header-title', 'item-title-column', 'Title');
        const priorityHeader = DOM.createElement('p', 'header-priority', 'item-priority-column', 'Priority');
        const statusHeader = DOM.createElement('p', 'header-status', 'item-completed-column', 'Status');
    
        headerRow.appendChild(titleHeader);
        headerRow.appendChild(priorityHeader);
        headerRow.appendChild(statusHeader);
    
        itemTableContent.appendChild(headerRow);

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

    handleAddItem(title, priority) {
        if (!this.currentProject) return;
    
        const newItem = new ToDoList(title, priority);
        this.currentProject.toDoItems.push(newItem);
        this.view.renderTodos(this.currentProject.toDoItems);
    }
}