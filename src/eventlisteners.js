import { saveTaskForm,createTaskElements } from "./add-task";
import { viewTask } from "./view-task";

export function projectBtnDom(){
    const projectBtn = document.querySelectorAll('.project-btn');
    projectBtn.forEach(button =>{
        button.addEventListener('click',(e) =>{
            const card = document.querySelector('.card');
            if (card) {
                card.innerHTML = '';
                const projectId = e.target.id;
                taskBtnDom(projectId);
            }
        })
    })
}

export function taskBtnDom(projectId){
    const projectName = document.getElementById(projectId);
    const addTaskBtn = document.getElementById('new-task');
    console.log(projectName.textContent);
    addTaskBtn.addEventListener('click',()=>{
        document.getElementById('new-todo').showModal();
    })
    document.getElementById('todo-close-button').addEventListener('click',() =>{
        document.getElementById('new-todo').close();
    })
    document.querySelector('.todo-form').addEventListener('submit',(event)=>{
        event.preventDefault();
        const task = saveTaskForm(projectId);
        createTaskElements(task.id,task.taskName,task.taskDesc,task.taskDue,task.taskPriority);
        event.target.reset();
    })
}
