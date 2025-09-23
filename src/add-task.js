import { myProjects,updateProjects } from "./add-project";

//saves the new task form
export function saveTaskForm(projectId){
    const id = 'a' + crypto.randomUUID();
    let taskName = document.getElementById('task-title').value;
    let taskDesc = document.getElementById('task-desc').value;
    let taskDue = document.getElementById('due-date').value;
    let taskPriority = document.getElementById('priority').value;

    const task = saveTask(id,taskName,taskDesc,taskDue,taskPriority);

    const updatedProjects = appendTask(myProjects,projectId,task);

    updateProjects(updatedProjects);
}

//appends the new task in the projects
export function appendTask(myProjects,projectId,task){
    return myProjects.map(project =>{
        if (project.id === projectId){
            return {
                ...project,
                myTask:[...project.myTask,task]
            };
        }
        return project;
    })
}

//creates the object for new task
export function saveTask(id,taskName,taskDesc,taskDue,taskPriority){
    return {id,taskName,taskDesc,taskDue,taskPriority};
}