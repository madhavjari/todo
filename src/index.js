import {createProjectElements,saveForm, myProjects} from "./add-project";
import { createTaskElements,saveTaskForm } from "./add-task";
import { taskBtnDom} from "./eventlisteners";
import { viewTask } from "./view-task";
import "./style.css";

document.getElementById('new-project-btn').addEventListener('click',() =>{
    document.getElementById('new-project').showModal();
})

document.getElementById('project-close-button').addEventListener('click',() =>{
    document.getElementById('new-project').close();
})

document.querySelector('.project-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const project = saveForm();
    createProjectElements(project.id,project.projectName);
    event.target.reset();
})

const nav = document.querySelector('nav');
nav.addEventListener('click',(e) =>{
    const projectBtn = e.target.closest('.project-btn');
    if(projectBtn){
        const projectId = e.target.id;
        const card = document.querySelector('.card');
        card.id = projectId+'.';
        viewTask(projectId,card);
        taskBtnDom(projectId,card);
    }
})