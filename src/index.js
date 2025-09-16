import {createProjectElements,saveForm} from "./add-project";
import { createTaskElements,saveTaskForm } from "./add-task";
import { projectBtnDom,taskBtnDom} from "./eventlisteners";
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
    const projectBtn = createProjectElements(project.id,project.projectName);
    event.target.reset();
    projectBtn.addEventListener('click', (e) => {
        const card = document.querySelector('.card');
        if (card) {
            card.innerHTML = '';
            const addTaskBtn = document.createElement('button');
            addTaskBtn.id = 'new-task';
            addTaskBtn.textContent = '+';
            card.appendChild(addTaskBtn);
            const projectId = e.target.id;
            taskBtnDom(addTaskBtn, projectId);
        }
    });
})

document.addEventListener('DOMContentLoaded', projectBtnDom);

// function projectBtnDom(){
//     let projectId;
//     const projectBtn = document.querySelectorAll('.project-btn');
//         projectBtn.forEach(button => {
//             button.addEventListener('click', (event)=>{
//                 projectId = event.target.id;
//                 document.getElementById('new-todo').showModal();
//             });
//         });
//     console.log(projectId);
//     document.getElementById('todo-close-button').addEventListener('click',() =>{
//         document.getElementById('new-todo').close();
//     })

//     document.querySelector('.todo-form').addEventListener('submit',(event,projectId)=>{
//         event.preventDefault();
//         console.log(projectId);
//         const task = saveTaskForm();
//         createTaskElements(task.id,task.taskName,task.taskDesc,task.taskDue,task.taskPriority);
//         event.target.reset();
//     })
// }




