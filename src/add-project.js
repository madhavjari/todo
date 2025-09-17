export let myProjects = [];

//saves the new project form
export function saveForm(){
    const id = crypto.randomUUID();
    let projectName = document.getElementById('project-title').value;
    let project = projectDetails(id,projectName);
    myProjects.push(project);
    return project;
}

//updates the form if new task is added
export function updateProjects(updatedProjects){
    myProjects = updatedProjects;
}

//creates the object of new project created
export function projectDetails(id,projectName){
    return {id,projectName,myTask:[]};
}

//loads the new project in the webpage
export function createProjectElements(id,projectName){
    const nav = document.querySelector('nav');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.id = id;
    projectBtn.textContent = projectName;
    nav.appendChild(projectBtn);
}