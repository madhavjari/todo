export let myProjects = [];

export function saveForm(){
    const id = crypto.randomUUID();
    let projectName = document.getElementById('project-title').value;
    let project = projectDetails(id,projectName);
    myProjects.push(project);
    return project;
}

export function updateProjects(updatedProjects){
    myProjects = updatedProjects;
}

export function projectDetails(id,projectName){
    return {id,projectName,myTask:[]};
}

export function createProjectElements(id,projectName){
    const nav = document.querySelector('nav');
    const article = document.querySelector('.article');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.id = id;
    projectBtn.textContent = projectName;
    nav.appendChild(projectBtn);
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = id;
    article.appendChild(card);
    return projectBtn;
}