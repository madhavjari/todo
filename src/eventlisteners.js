import { saveTaskForm } from "./add-task";
import { viewTask } from "./view-task";
import { saveForm,createProjectElements} from "./add-project";
import { deleteProject,deleteTask } from "./delete";
import { editProject,editNameInForm,editTodoForm,editTask } from "./edit";

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
        document.getElementById('new-project').close();
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
        todoDialog.close();
    })
    todoForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        const currentProjectId = card.dataset.id;
        todoDialog.close();
        saveTaskForm(currentProjectId);
        viewTask(currentProjectId,card);  
        event.target.reset();
    })
}

export function projectSelect(nav){
    nav.addEventListener('click',(e) =>{
        const projectBtn = e.target.closest('.project-btn');
        const deleteBtn = e.target.closest('.delete-btn');
        const projectEditBtn = e.target.closest('.project-edit-btn');
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
        if(projectEditBtn){
            const editBtnId = e.target.dataset.id;
            const projectForm = document.getElementById('edit-project');
            projectForm.showModal();
            editNameInForm(editBtnId);
            document.getElementById('edit-project-close-button').addEventListener('click',() =>{
                projectForm.close();
            })
        }
    })
}

export function projectEditForm(){
    const projectEditForm = document.querySelector('.edit-project-form');
    projectEditForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        const projectId = e.target.dataset.id;
        editProject(projectId);
        document.getElementById('edit-project').close();
        e.target.reset();
    })
}

export function taskSelect(card){
    card.addEventListener('click',(e) =>{
        const taskDeleteBtn = e.target.closest('.task-delete-btn');
        const taskEditBtn = e.target.closest('.task-edit-btn');
        if(taskDeleteBtn){
            const deleteBtnId = e.target.dataset.id;
            deleteTask(deleteBtnId);
        }
        if(taskEditBtn){
            const editBtnId = e.target.dataset.id;
            const todoForm = document.getElementById('edit-todo');
            todoForm.showModal();
            editTodoForm(editBtnId);
            document.getElementById('edit-todo-close-button').addEventListener('click',() =>{
                todoForm.close();
            })
        }
    })
}

export function taskEditForm(){
    const taskEditForm = document.querySelector('.edit-todo-form');
    taskEditForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        const taskId = e.target.dataset.id;
        document.getElementById('edit-todo').close();
        editTask(taskId);
        e.target.reset();
    })
}
