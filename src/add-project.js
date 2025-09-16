import { myTask } from "./add-task";

export let myProjects = [];

export function saveForm(){
    const id = crypto.randomUUID();
    let projectName = document.getElementById('project-title').value;
    let project = projectDetails(id,projectName);
    myProjects.push(project);
    return project;
}

export function projectDetails(id,projectName){
    return {id,projectName};
}

export function createProjectElements(id,projectName){
    const nav = document.querySelector('nav');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.id = id;
    projectBtn.textContent = projectName;
    nav.appendChild(projectBtn);
    return projectBtn;
}