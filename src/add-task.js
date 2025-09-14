export let myTask = [];

export function saveTaskForm(){
    const id = crypto.randomUUID();
    let taskName = document.getElementById('task-title').value;
    myTask.push(saveTask(id,taskName));
    createTaskElements(id,taskName);
}

export function saveTask(id,taskName){
    return {id,taskName};
}

export function createTaskElements(id,taskName){
    const body = document.querySelector('body');
    const taskCard = document.createElement('div');
    taskCard.textContent = taskName; 
    taskCard.id = id;
    taskCard.className = 'tasks';
    body.appendChild(taskCard);
}