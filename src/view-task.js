import { myProjects } from "./add-project";

export function viewTask(projectId,card){
    card.innerHTML = '';
    const currProject = myProjects.find(project => project.id === projectId);
    console.log('hello',currProject);
    const projectName = document.createElement('h2');
    projectName.textContent = currProject.projectName;
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    console.log(currProject.myTask.length);
    currProject.myTask.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.id = task.id;
        console.log("taskcard",taskCard);
        const taskNameElement = document.createElement('div');
        taskNameElement.textContent = task.taskName;
        const taskDescElement = document.createElement('div');
        taskDescElement.textContent = task.taskDesc;
        const taskDueElement = document.createElement('div');
        taskDueElement.textContent = task.taskDue;
        const taskPriorityElement = document.createElement('div');
        taskPriorityElement.textContent = task.taskPriority;
        taskCard.append(taskNameElement,taskDescElement,taskDueElement,taskPriorityElement);
        taskContainer.appendChild(taskCard);
    });
    card.append(projectName,taskContainer);
}