export let myProjects = [];

export function saveForm(){
    const id = crypto.randomUUID();
    let projectName = document.getElementById('project-title').value;
    myProjects.push(projectDetails(id,projectName));
    createProjectElements(id,projectName);
}

export function projectDetails(id,projectName){
    return {id,projectName};
}

export function createProjectElements(id,projectName){
    const body = document.querySelector('body');
    const projectCard = document.createElement('button');
    projectCard.className = 'project-btn';
    projectCard.id = id;
    projectCard.textContent = projectName;
    body.appendChild(projectCard);
}