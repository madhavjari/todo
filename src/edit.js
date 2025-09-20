import { myProjects, updateProjects } from "./add-project";


export function editNameInForm(projectId){
    const projectName = myProjects.find(project => project.id === projectId).projectName;
    const currProjectName = document.getElementById('project-title-edit');
    currProjectName.value = projectName;

    const projectEditForm = document.querySelector('.edit-project-form');
    projectEditForm.dataset.id = projectId;
}

export function editTodoForm(taskId){
    const task = myProjects.flatMap(project => project.myTask).find(task => task.id === taskId);
    const taskName = task.taskName;
    const taskDesc = task.taskDesc;
    const taskDue = task.taskDue;
    const taskPriority = task.taskPriority;
    
    const currTaskName = document.getElementById('task-title-edit');
    const currTaskDesc = document.getElementById('task-desc-edit');
    const currTaskDue = document.getElementById('due-date-edit');
    const currTaskPriority = document.getElementById('priority-edit');

    currTaskName.value = taskName;
    currTaskDesc.value = taskDesc;
    currTaskDue.value = taskDue;
    currTaskPriority.value = taskPriority;

}

export function editProject(projectId){
    const editedProjectName = document.getElementById('project-title-edit').value;
        const updatedProjects = myProjects.map(project => {
            console.log(project);
            if(project.id === projectId){
                return {
                    ...project,
                    projectName: editedProjectName
                };
            }
            return project;
        });
        updateProjects(updatedProjects);
        const projectBtn = document.querySelector('.project-btn[data-id="'+projectId+'"]');
        projectBtn.textContent = editedProjectName;
}
