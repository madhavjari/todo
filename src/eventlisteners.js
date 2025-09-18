import { saveTaskForm } from "./add-task";
import { viewTask } from "./view-task";
import { saveForm,createProjectElements } from "./add-project";
import { deleteProject } from "./delete-project";

export function initProject(){
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
}

export function initTask(card){
    const addTaskBtn = document.getElementById('new-task');
    const todoForm = document.querySelector('.todo-form');
    const todoDialog = document.getElementById('new-todo');

    addTaskBtn.addEventListener('click',()=>{
        todoDialog.showModal();
    })
    document.getElementById('todo-close-button').addEventListener('click',() =>{
        todoDialog.getElementById('new-todo').close();
    })
    todoForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        const currentProjectId = card.dataset.id;
        console.log(card);
        saveTaskForm(currentProjectId);
        viewTask(currentProjectId,card);
        event.target.reset();
        todoDialog.close();
    })
}

export function projectSelect(nav){
    nav.addEventListener('click',(e) =>{
        const projectBtn = e.target.closest('.project-btn');
        const deleteBtn = e.target.closest('.delete-btn');
        if(projectBtn){
            const projectId = e.target.dataset.id;
            const card = document.querySelector('.card');
            card.dataset.id = projectId;
            viewTask(projectId,card);
        }
        if(deleteBtn){
            const deleteBtnId = e.target.dataset.id;
            deleteProject(deleteBtnId);
        }
    })
}
