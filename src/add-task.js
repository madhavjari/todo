export let myTask = [];

export function addTaskButton(){
    
}

export function saveTaskForm(projectName){
    const id = crypto.randomUUID();
    let taskName = document.getElementById('task-title').value;
    let taskDesc = document.getElementById('task-desc').value;
    let taskDue = document.getElementById('due-date').value;
    let taskPriority = document.getElementById('priority').value;
    let task = saveTask(projectName,id,taskName,taskDesc,taskDue,taskPriority);
    myTask.push(task);
    return task;
}

export function saveTask(projectName,id,taskName,taskDesc,taskDue,taskPriority){
    return {projectName,id,taskName,taskDesc,taskDue,taskPriority};
}

export function createTaskElements(projectName,id,taskName,taskDesc,taskDue,taskPriority){
    const card = document.querySelector('.card');
    card.id = projectName.id;
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.id = id;
    card.appendChild(taskCard);
    const projectNameElement = document.createElement('div');
    projectNameElement.textContent = projectName.textContent;
    const taskNameElement = document.createElement('div');
    taskNameElement.textContent = taskName;
    const taskDescElement = document.createElement('div');
    taskDescElement.textContent = taskDesc;
    const taskDueElement = document.createElement('div');
    taskDueElement.textContent = taskDue;
    const taskPriorityElement = document.createElement('div');
    taskPriorityElement.textContent = taskPriority;
    taskCard.append(projectNameElement,taskNameElement,taskDescElement,taskDueElement,taskPriorityElement);
}