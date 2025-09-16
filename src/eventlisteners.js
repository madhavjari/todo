import { saveTaskForm,createTaskElements } from "./add-task";
import { viewTask } from "./view-task";

export function projectBtnDom(){
    const projectBtn = document.querySelectorAll('.project-btn');
    projectBtn.forEach(button =>{
        button.addEventListener('click',(e) =>{
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
        })
    })
}

export function taskBtnDom(addTaskBtn,projectId){
    const projectName = document.getElementById(projectId);
    console.log(projectName.textContent);
    addTaskBtn.addEventListener('click',()=>{
        document.getElementById('new-todo').showModal();
    })
    document.getElementById('todo-close-button').addEventListener('click',() =>{
        document.getElementById('new-todo').close();
    })
    document.querySelector('.todo-form').addEventListener('submit',(event)=>{
        event.preventDefault();
        const task = saveTaskForm(projectName.textContent);
        createTaskElements(projectName,task.id,task.taskName,task.taskDesc,task.taskDue,task.taskPriority);
        event.target.reset();
    })
}
