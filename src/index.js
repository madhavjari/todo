import {myProjects,saveForm} from "./add-project";

document.getElementById('new-project-btn').addEventListener('click',() =>{
    document.getElementById('new-project').showModal();
})

document.getElementById('project-close-button').addEventListener('click',() =>{
    document.getElementById('new-project').close();
})

document.querySelector('.project-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    saveForm();
    event.target.reset();
})

// document.querySelector('.project-btn').addEventListener('click', (event)=>{
//     clickedProject = event.target;
//     document.getElementById('new-todo').showModal();
// })

// document.getElementById('todo-close-button').addEventListener('click',() =>{
//     document.getElementById('new-todo').close();
// })

// document.querySelector('.todo-form').addEventListener('submit',(event)=>{
//     event.preventDefault();
//     event.target.reset();
// })


