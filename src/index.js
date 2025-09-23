import { initProject, initTask, projectEditForm, projectSelect, taskEditForm, taskSelect} from "./eventlisteners";
import { myProjects,createProjectElements } from "./add-project";
import { viewTask } from "./view-task";
import "./style.css";

initProject();

const nav = document.querySelector('nav');
const card = document.querySelector('.card');

initTask(card);

projectSelect(nav);

projectEditForm();

taskSelect(card);

taskEditForm();

myProjects.forEach(project => {
    createProjectElements(project.id, project.projectName);
});

const defaultProject = myProjects[0];
if (defaultProject) {
    card.dataset.id = defaultProject.id;
    viewTask(defaultProject.id, card);
}