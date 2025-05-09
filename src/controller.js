// js file to handle all intermediate actions between the data and the view

import { ToDoItem } from "./data";
import { ListView } from "./view-new";

export class PageController {
    constructor() {
        this.view = new ListView;
        this.toDoList = new ToDoItem;
    }
}