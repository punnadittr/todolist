const ProjectModal = (() => {
  const renderAddProjectModal = () => {
    ModalTemplate.createFormModal('add-project-dialog', 
                                  'Add New Project', 
                                  'Enter Project Name', 
                                  'add-project-field', 
                                  'add-project-btn',
                                  'Add Project')
  }
  return { renderAddProjectModal }
})();

const TaskModal = (() => {
  const renderAddTaskModal = () => {
    ModalTemplate.createFormModal('add-task-dialog',
                                  'Add New Task',
                                  'Enter Task',
                                  'add-task-field',
                                  'add-task-btn',
                                  'Add Task')
  }
  return { renderAddTaskModal }
})();

const ModalTemplate = (() => {
  const createFormModal = (id, title, formLabel, formID, btnID, btnContent) => {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = id;
    modal.innerHTML = ` 
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">          
          <form>
            <div class="form-group">
              <label for="${formID}" class="col-form-label">${formLabel}</label>
              <input type="text" class="form-control" id="${formID}">
            </div>
          </form>
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