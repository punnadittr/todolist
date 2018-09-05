const GenericButtons = (() => {
  const renderAddBtn = (insertTarget, modalID) => {
    const target = document.getElementById(insertTarget);
    target.innerHTML = `${target.innerHTML} <i class="fas fa-plus-square" 
    data-toggle="modal" 
    data-target="#${modalID}"></i>`
  }
  return { renderAddBtn }
})();

const TaskButtons = (() => {
  const renderAddTaskButton = (modalID) => {
    GenericButtons.renderAddBtn('Task', 'add-task-dialog');
  }
  const renderChangeTaskNameButton = () => {

  }
  const renderDeleteTaskButton = () => {

  }
  return { renderAddTaskButton, renderChangeTaskNameButton, renderDeleteTaskButton }
})();

const ProjectButtons = (() => {
  const renderAddProjectButton = () => {
    GenericButtons.renderAddBtn('Project', 'add-project-dialog');
  }
  const renderDeleteProjectButton = () => {

  }
  const renderChangeProjectNameButton = () => {

  }
  return { renderChangeProjectNameButton, renderDeleteProjectButton, renderAddProjectButton }
})();

export { TaskButtons, ProjectButtons }