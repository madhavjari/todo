import deleteImg from './img/delete.png';
import editImg from './img/edit-button.png';

export let myProjects = loadProjectsFromLocalStorage();

function myProjectsToLocalStorage(myProjects){
    localStorage.setItem("myProjects", JSON.stringify(myProjects));
}

function loadProjectsFromLocalStorage(){
    let projects = localStorage.getItem('myProjects');
    if(projects) projects =  JSON.parse(projects);
    else projects =  [];
    const defaultProjectExists = projects.some(project => project.projectName === 'Default Project');
    if (!defaultProjectExists) {
        const defaultProject = projectDetails(crypto.randomUUID(), 'Default Project');
        projects.unshift(defaultProject);
        myProjectsToLocalStorage(projects);
    }
    return projects;
}

//saves the new project form
export function saveForm(){
    const id = crypto.randomUUID();
    let projectName = document.getElementById('project-title').value;
    let project = projectDetails(id,projectName);
    myProjects.push(project);
    myProjectsToLocalStorage(myProjects);
    return project;
}

//updates the form if new task is added
export function updateProjects(updatedProjects){
    myProjects.length = 0;
    myProjects.push(...updatedProjects);
    myProjectsToLocalStorage(myProjects);
}

//creates the object of new project created
export function projectDetails(id,projectName){
    return {id,projectName,myTask:[]};
}

//loads the new project in the webpage
export function createProjectElements(id,projectName){
    const nav = document.querySelector('nav');

    const projectCont = document.createElement('div');
    projectCont.classList.add('project-container');
    projectCont.id = id;
    nav.appendChild(projectCont);

    const projectBtn = document.createElement('button');
    const deleteBtn = document.createElement('img');
    const projectEditBtn = document.createElement('img');

    deleteBtn.src = deleteImg;
    deleteBtn.setAttribute('data-id',id);
    deleteBtn.classList.add('delete-btn');

    projectBtn.classList.add('project-btn');
    projectBtn.setAttribute('data-id',id);
    projectBtn.textContent = projectName;

    projectEditBtn.src = editImg;
    projectEditBtn.setAttribute('data-id',id);
    projectEditBtn.classList.add('project-edit-btn');

    projectCont.append(projectBtn,deleteBtn,projectEditBtn);
}