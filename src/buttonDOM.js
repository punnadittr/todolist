import { ProjectList, Project } from "./project";
import { ProjectModal, TaskModal } from "./modals";
import ToDoList from "./todolist";
import Helper from "./helper";
import Table from "./table";

const ButtonDOM = (() => {
  const addEventToProjectIcon = () => {
    const addProjectIcon = document.getElementById('add-project-icon');
    addProjectIcon.addEventListener('click', () => {
      ProjectModal.resetModal();
      ProjectModal.renderAddProjectModal();
      addEventToProjectBtn();
    });
  }
  const addEventToTaskIcon = () => {
    const addTaskIcon = document.getElementById('add-task-icon');
    addTaskIcon.addEventListener('click', () => {
      TaskModal.resetModal();
      TaskModal.renderAddTaskModal();
      addEventToTaskBtn();
    });
  }
  const addEventToProjectBtn = () => {   
    const addProjectBtn = document.getElementById('add-project-btn');
    addProjectBtn.addEventListener('click', () => {
      const inputFieldValue = document.getElementById('add-project-field').value;
      // Check if project name already exists
      if (ProjectList.isDuplicate(inputFieldValue) === true) {
        ProjectModal.displayErrorMsg('Cannot create a duplicate project name');
      // Check if the input field is empty
      } else if (inputFieldValue.trim() === '') {
        ProjectModal.displayErrorMsg('Project name cannot be empty');
      } else {
        // Create a new project and add to ProjectList array
        const newProject = Project(inputFieldValue);
        ProjectList.addProject(newProject);
        Table.resetTable();
      }
    });
  }
  const addEventToTaskBtn = () => {
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
        Table.resetTable();
      }
    });
  }
  return { addEventToProjectIcon, addEventToTaskIcon }
})();

export default ButtonDOM;