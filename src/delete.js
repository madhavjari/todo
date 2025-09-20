import { myProjects} from "./add-project";
import { updateProjects } from "./add-project";

export function deleteProject(projectId){
    const index = myProjects.findIndex(project => project.id === projectId);
    if(index !== -1)myProjects.splice(index,1);
    console.log(myProjects);
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
    console.log(updatedProjects);
}

