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

    const taskEditForm = document.querySelector('.edit-todo-form');
    taskEditForm.dataset.id = taskId;

}

export function editProject(projectId){
    const editedProjectName = document.getElementById('project-title-edit').value;
        const updatedProjects = myProjects.map(project => {
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

export function editTask(taskId){
    const editedTaskName = document.getElementById('task-title-edit').value;
    const editedTaskDesc = document.getElementById('task-desc-edit').value;
    const editedTaskDue = document.getElementById('due-date-edit').value;
    const editedTaskPriority = document.getElementById('priority-edit').value;

    const updatedProjects = myProjects.map(project => {
            return{
                ...project,
                myTask: project.myTask.map(task =>{
                    if(task.id === taskId){
                            return {
                                ...task,
                                taskName: editedTaskName,
                                taskDesc: editedTaskDesc,
                                taskDue: editedTaskDue,
                                taskPriority: editedTaskPriority    
                            }
                        }
                return task
                })
            }
        });
        updateProjects(updatedProjects);  
        console.log(myProjects); 
        const idText = '#'+taskId+'.task-card>div:';
        const firstDiv = idText + 'nth-child(1)';
        const seconDiv = idText + 'nth-child(2)';
        const thirdDiv = idText + 'nth-child(3)';
        const fourthDiv = idText + 'nth-child(4)';

        const taskName = document.querySelector(firstDiv);
        taskName.textContent = editedTaskName;  
        
        const taskDesc = document.querySelector(seconDiv);
        taskDesc.textContent = editedTaskDesc;

        const taskDue = document.querySelector(thirdDiv);
        taskDue.textContent = editedTaskDue;

        const taskPriority = document.querySelector(fourthDiv);
        taskPriority.textContent = editedTaskPriority;
}