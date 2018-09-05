import { ProjectList, Project } from "./project";
import { ProjectModal, TaskModal } from "./modals";
import ClearTableTasks from "./clearTable";
import ToDoList from "./todolist";
import Helper from "./helper";

const ButtonDOM = (() => {
  const addProjectBtnDOM = () => {   
    const addProjectBtn = document.getElementById('add-project-btn');
    addProjectBtn.addEventListener('click', () => {
      const inputFieldValue = document.getElementById('add-project-field').value;
      if (ProjectList.isDuplicate(inputFieldValue) === true) {
        ProjectModal.displayErrorMsg('Cannot create a duplicate project name');
      } else if (inputFieldValue.trim() === '') {
        ProjectModal.displayErrorMsg('Project name cannot be empty');
      } else {
        const newProject = Project(inputFieldValue);
        ProjectList.addProject(newProject);
        ProjectModal.resetModal();
        ClearTableTasks();
      }
    });
  }
  const addTaskBtnDOM = () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    addTaskBtn.addEventListener('click', () => {
      const projectName = document.getElementById('project-select').value;
      const taskName = document.getElementById('add-task-name-field').value;
      const priority = document.getElementById('priority-select').value;
      const dueDate = document.getElementById('task-date').value;

      if (taskName.trim() === '') {
        TaskModal.displayErrorMsg('nameError', 'Task name cannot be empty');
      } else {
        const newTodo = ToDoList(taskName, dueDate, priority);
        const project = Helper.findProjectByName(projectName);
        console.log(project.projectTitle())
        project.appendItem(newTodo);
        TaskModal.resetModal();
        ClearTableTasks();
      }
    });
  }
  return { addProjectBtnDOM, addTaskBtnDOM }
})();

export default ButtonDOM;