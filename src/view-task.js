import { myProjects } from "./add-project";

export function viewTask(projectId,card){
    const currProject = myProjects.find(project => project.id === projectId);
    console.log('hello',currProject);
    const projectName = document.createElement('div');
    projectName.textContent = currProject.projectName;
    const allTaskId = currProject.myTask.map(task => task.id);
    const allTaskName = currProject.myTask.map(task => task.taskName);
    const allTaskDesc = currProject.myTask.map(task => task.taskDesc);
    const allTaskDue = currProject.myTask.map(task => task.taskDue);
    const allTaskPriority = currProject.myTask.map(task => task.taskPriority);
    console.log(currProject.myTask.length)
    for(let i = 0; i < currProject.myTask.length; i++){
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.id = allTaskId[i];
        card.appendChild(taskCard);
        const taskNameElement = document.createElement('div');
        taskNameElement.textContent = allTaskName[i];
        const taskDescElement = document.createElement('div');
        taskDescElement.textContent = allTaskDesc[i];
        const taskDueElement = document.createElement('div');
        taskDueElement.textContent = allTaskDue[i];
        const taskPriorityElement = document.createElement('div');
        taskPriorityElement.textContent = allTaskPriority[i];
        taskCard.append(projectName,taskNameElement,taskDescElement,taskDueElement,taskPriorityElement)
        console.log(taskCard);
    }
}