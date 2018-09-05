import { ProjectList } from "./project";

const ProjectModal = (() => {
  const renderAddProjectModal = () => {
    ModalTemplate.createFormModal('project',
                                  'add-project-dialog', 
                                  'Add New Project',                                  
                                  'add-project-btn',
                                  'Add Project')
  }
  const resetModal = () => {
    const modal = document.getElementById('add-project-dialog');
    if (modal != null) {
    modal.parentNode.removeChild(modal);
    } else { 
      false;
    }
  }
  const displayErrorMsg = (message) => {
    const labelField = document.getElementsByTagName('label')[0];
    labelField.innerText = message
    labelField.style.color = 'red';
  }
  return { renderAddProjectModal, resetModal, displayErrorMsg }
})();

const TaskModal = (() => {
  const renderAddTaskModal = () => {
    ModalTemplate.createFormModal('task',
                                  'add-task-dialog',
                                  'Add New Task',                                 
                                  'add-task-btn',
                                  'Add Task',
                                  renderProjectSelect())
  }
  const resetModal = () => {
    const modal = document.getElementById('add-task-dialog');
    if (modal != null) {
      modal.parentNode.removeChild(modal);
    } else {
      false;
    }
  }
  const displayErrorMsg = (type, message) => {
    if (type === 'nameError') {
      const taskNameLabel = document.getElementById('task-name-label')
      taskNameLabel.innerText = message;
      taskNameLabel.style.color = 'red';
    } else {
      const dueDateLabel = document.getElementById('duedate-label');
      dueDateLabel.innerText = message;
      dueDateLabel.style.color = 'red';
    }
  }
  const renderProjectSelect = () => {
    let output = '';
    let projectSelection = [];
    ProjectList.allProjects().forEach(element => {
      projectSelection.push(element.projectTitle());
    });
    projectSelection.forEach(project => {
      output = output + `<option>${project}</option>`
    })
   return output;
  }
  return { renderAddTaskModal, resetModal, displayErrorMsg, renderProjectSelect }
})();

const ModalTemplate = (() => {
  const createFormModal = (formType, id, title, btnID, btnContent, projectsOptions = '') => {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = id;
    const renderForm = (formType) => { 
      if (formType === 'project') {
        // Form for adding project
        return `<form>
                  <div class="form-group">
                    <label for="add-project-field" class="col-form-label">Enter Project Name</label>
                    <input type="text" class="form-control" id="add-project-field">
                  </div>
                </form>`;
      } else {
        // Form for adding task
        return `<form>
                  <div class="form-group">
                    <label id="select-project-label" for="select-project" class="col-form-label">Select Project</label>
                    <select class="form-control" id="project-select">
                    ${projectsOptions}
                    </select>
                    <label id="task-name-label" for="add-task-field" class="col-form-label">Enter Task Name</label>
                    <input type="text" class="form-control" id="add-task-name-field">
                    <label id="priority-label" for="priority-select" class="col-form-label">Priority</label>
                    <select class="form-control" id="priority-select">
                      <option>Low</option>
                      <option>Normal</option>
                      <option>High</option>
                    </select>
                    <label id="duedate-label" for="task-date" class="col-form-label">Due Date</label>
                    <input id="task-date" class="form-control" type="date">
                  </div>
                </form>`;
    }
  };  
  // Generic modal template
    modal.innerHTML = 
    `<div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">     
         ${renderForm(formType)}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" id="${btnID}">${btnContent}</button>
        </div>
      </div>
    </div>`
    document.getElementById('main-container').appendChild(modal);
  }
  return { createFormModal }
})();

export { ProjectModal, TaskModal, ModalTemplate }