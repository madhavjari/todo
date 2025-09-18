import { myProjects } from "./add-project";

export function deleteProject(projectId){
    const index = myProjects.findIndex(project => project.id === projectId);
    if(index !== -1)myProjects.splice(index,1);
    console.log(myProjects);
    const projectToDelete = document.getElementById(projectId);
    if(projectToDelete) projectToDelete.remove();
    const cardId = '.card[data-id="'+projectId+'"]';
    const card = document.querySelector(cardId);
    if(card) card.innerHTML = '';
}