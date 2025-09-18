import { initProject, initTask, projectSelect} from "./eventlisteners";
import "./style.css";

initProject();

const nav = document.querySelector('nav');
const card = document.querySelector('.card');

initTask(card);

projectSelect(nav);