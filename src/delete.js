import { myProjects} from "./add-project";
import { updateProjects } from "./add-project";

export function deleteProject(projectId){
    const updatedProjects = myProjects.filter(project => project.id !== projectId);
    console.log(updatedProjects);
    updateProjects(updatedProjects);

    const projectToDelete = document.getElementById(projectId);
    if(projectToDelete) projectToDelete.remove();

    const cardId = '.card[data-id="'+projectId+'"]';
    const card = document.querySelector(cardId);
    if(card) {
        card.innerHTML = '';
        card.removeAttribute('data-id');
    }
}

export function deleteTask(taskId){
    const taskTodelete = document.getElementById(taskId);
    if(taskTodelete) taskTodelete.remove();

    const updatedProjects = myProjects.map(project => {
        const remainingTask = project.myTask.filter(task => task.id !== taskId);
        return {
            ...project,
            myTask: remainingTask
        };
    });
    updateProjects(updatedProjects);
}

