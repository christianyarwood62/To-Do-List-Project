import "./styles.css";
import { PageController } from "./controller.js";

import { showSideBar } from "./sidebar.js";
import { createGenericItemsProject, createProjectsArray } from "./data.js";


const newController = new PageController();
newController.view.renderListTemplate();
