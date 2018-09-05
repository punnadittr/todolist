const GenericButtons = (() => {
  const renderAddBtn = (insertTarget, modalID, id) => {
    const target = document.getElementById(insertTarget);
    target.innerHTML = `${target.innerHTML} <i class="fas fa-plus-square" 
    data-toggle="modal" 
    data-target="#${modalID}"
    id="${id}"></i>`
  }
  return { renderAddBtn }
})();

const TaskButtons = (() => {
  const renderAddTaskButton = () => {
    GenericButtons.renderAddBtn('Task', 'add-task-dialog', 'add-task-icon');
  }
  const renderChangeTaskNameButton = () => {

  }
  const renderDeleteTaskButton = () => {

  }
  return { renderAddTaskButton, renderChangeTaskNameButton, renderDeleteTaskButton }
})();

const ProjectButtons = (() => {
  const renderAddProjectButton = () => {
    GenericButtons.renderAddBtn('Project', 'add-project-dialog', 'add-project-icon');
  }
  const renderDeleteProjectButton = () => {

  }
  const renderChangeProjectNameButton = () => {

  }
  return { renderChangeProjectNameButton, renderDeleteProjectButton, renderAddProjectButton }
})();

export { TaskButtons, ProjectButtons }