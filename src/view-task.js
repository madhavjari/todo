import { myProjects } from "./add-project";
import deleteImg from './img/delete.png';
import editImg from './img/edit-button.png';

export function viewTask(projectId,card){
    card.innerHTML = '';

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const currProject = myProjects.find( project => project.id === projectId);
    const projectName = document.createElement('h2');
    projectName.textContent = currProject.projectName;

    currProject.myTask.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.id = task.id;

        const taskNameElement = document.createElement('div');
        taskNameElement.textContent = task.taskName;

        const taskDescElement = document.createElement('div');
        taskDescElement.textContent = task.taskDesc;

        const taskDueElement = document.createElement('div');
        taskDueElement.textContent = task.taskDue;

        const taskPriorityElement = document.createElement('div');
        taskPriorityElement.textContent = task.taskPriority;

        const taskDeleteBtn = document.createElement('img');
        taskDeleteBtn.src = deleteImg;
        taskDeleteBtn.setAttribute('data-id',task.id);
        taskDeleteBtn.classList.add('task-delete-btn');

        const taskEditBtn = document.createElement('img');
        taskEditBtn.src = editImg;
        taskEditBtn.setAttribute('data-id',task.id);
        taskEditBtn.classList.add('task-edit-btn');

        taskCard.append(taskNameElement,taskDescElement,taskDueElement,taskPriorityElement,taskDeleteBtn,taskEditBtn);
        taskContainer.appendChild(taskCard);
        console.log(myProjects);
    });
    card.append(projectName,taskContainer);
}