import { saveTaskForm,createTaskElements } from "./add-task";
import { viewTask } from "./view-task";
import { myProjects } from "./add-project";

export function taskBtnDom(projectId,card){
    const addTaskBtn = document.getElementById('new-task');
    addTaskBtn.addEventListener('click',()=>{
        document.getElementById('new-todo').showModal();
    })
    document.getElementById('todo-close-button').addEventListener('click',() =>{
        document.getElementById('new-todo').close();
    })
    document.querySelector('.todo-form').addEventListener('submit',(event)=>{
        event.preventDefault();
        saveTaskForm(projectId);
        viewTask(projectId,card);
        event.target.reset();
    })
}
