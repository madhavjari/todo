import { saveTaskForm,createTaskElements } from "./add-task";
import { viewTask } from "./view-task";
import { myProjects } from "./add-project";

export function taskBtnDom(projectId,card){
    card.dataset.projectId = projectId;
    const addTaskBtn = document.getElementById('new-task');
    addTaskBtn.addEventListener('click',()=>{
        document.getElementById('new-todo').showModal();
    })
    document.getElementById('todo-close-button').addEventListener('click',() =>{
        document.getElementById('new-todo').close();
    })
    document.querySelector('.todo-form').addEventListener('submit',(event)=>{
        const currentProjectId = card.dataset.projectId;
        event.preventDefault();
        saveTaskForm(currentProjectId);
        viewTask(currentProjectId,card);
        event.target.reset();
    })
}
