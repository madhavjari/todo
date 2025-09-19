import { initProject, initTask, projectSelect, taskSelect} from "./eventlisteners";
import "./style.css";

initProject();

const nav = document.querySelector('nav');
const card = document.querySelector('.card');

initTask(card);

projectSelect(nav);

taskSelect(card);