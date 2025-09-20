import { initProject, initTask, projectEditForm, projectSelect, taskSelect} from "./eventlisteners";
import "./style.css";

initProject();

const nav = document.querySelector('nav');
const card = document.querySelector('.card');

initTask(card);

projectSelect(nav);

projectEditForm();

taskSelect(card);