const ProjectList = (() => {
  let projectLists = [];

  const addProject = (item) => {
    projectLists.push(item)
  }
  const removeProject = (item) => {
    projectLists = projectLists.filter(project => project != item);
  }
  const allProjects = () => projectLists;
  const isDuplicate = (project) => {
    for (let i = 0; i < allProjects().length; i++) {
      if (projectLists[i].projectTitle() === project) {
        return true;
      }
    }
    return false;
  };
  return { addProject, removeProject, allProjects, isDuplicate }
})();

const Project = (title = 'Default') => {
  let todoList = [];

  const projectTitle = () => title;
  const todoLists = () => todoList;

  const appendItem = (item) => {
    todoList.push(item);
  }
  const removeList = (item) => {
    todoList = todoList.filter(list => list != item);
  }
  const rename = (newName) => {
    title = newName;
  }  
  return {projectTitle, todoLists, appendItem, removeList, rename}
}

export { Project, ProjectList }