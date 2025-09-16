import { myProjects,updateProjects } from "./add-project";

export function saveTaskForm(projectId){
    const id = crypto.randomUUID();
    let taskName = document.getElementById('task-title').value;
    let taskDesc = document.getElementById('task-desc').value;
    let taskDue = document.getElementById('due-date').value;
    let taskPriority = document.getElementById('priority').value;
    const task = saveTask(id,taskName,taskDesc,taskDue,taskPriority);
    const updatedProjects = appendTask(myProjects,projectId,task);
    updateProjects(updatedProjects);
    console.log("my",myProjects);
    return task;
}

export function appendTask(myProjects,projectId,task){
    return myProjects.map(project =>{
        if (project.id === projectId){
            return {
                ...project,
                myTask:[...project.myTask,task]
            };
        }
        return project;
    })
}

export function saveTask(id,taskName,taskDesc,taskDue,taskPriority){
    return {id,taskName,taskDesc,taskDue,taskPriority};
}

export function createTaskElements(id,taskName,taskDesc,taskDue,taskPriority){
    const card = document.querySelector('.card');
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.id = id;
    card.appendChild(taskCard);
    const taskNameElement = document.createElement('div');
    taskNameElement.textContent = taskName;
    const taskDescElement = document.createElement('div');
    taskDescElement.textContent = taskDesc;
    const taskDueElement = document.createElement('div');
    taskDueElement.textContent = taskDue;
    const taskPriorityElement = document.createElement('div');
    taskPriorityElement.textContent = taskPriority;
    taskCard.append(taskNameElement,taskDescElement,taskDueElement,taskPriorityElement);
}