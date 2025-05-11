// js file to handle all intermediate actions between the data and the view

import { ToDoItem, ToDoProject, projectsArray } from "./data";
import { ListView } from "./view";

export class PageController {
    constructor() {
        this.view = new ListView();
        this.currentProject = null;

        this.view.renderListTemplate();
        this.view.renderProjectList(projectsArray);

        this.view.showProjectForm = () => {
            this.handleAddProject();
        };
        this.view.onSelectProject = (projectId) => this.handleSelectProject(projectId);
        this.view.onToggleStatus = (todoItem) => {
            todoItem.checked = !todoItem.checked;
            this.view.renderTodos(this.currentProject.toDoItems);
        };

        const defaultProject = new ToDoProject("Generic List");
        projectsArray.push(defaultProject);
        this.currentProject = defaultProject;
        this.view.renderTodos(defaultProject.toDoItems);

        this.view.onSubmitItem = (title, priority) => {
            if (this.currentProject) {
                const newItem = new ToDoItem(title, priority);
                this.currentProject.toDoItems.push(newItem);
                this.view.renderTodos(this.currentProject.toDoItems);
            }
        };
    }

    handleSelectProject(projectId) {
        const selectedProject = projectsArray.find(p => p.id === projectId);
        if (selectedProject) {
            this.currentProject = selectedProject;
            this.view.renderTodos(selectedProject.toDoItems);
        }
    }

    handleAddProject() {
        const dialog = document.querySelector('#project-dialog');
        const input = document.querySelector('#project-title-input');
        const dueDate = document.querySelector('#project-duedate-input');
        const form = document.querySelector('#project-form');
        
        dialog.showModal();
        
        form.onsubmit = (e) => {
            e.preventDefault();
            const name = input.value.trim();
            const due = dueDate.value;

            if (!name) return;
        
            const newProject = new ToDoProject(name, due);
            projectsArray.push(newProject);
            this.currentProject = newProject;
            
            this.view.renderProjectList(projectsArray);
            this.view.renderTodos(newProject.toDoItems);
            
            input.value = '';
            dueDate.value = '';
            dialog.close();
        };
    }
}