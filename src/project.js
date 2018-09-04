const ProjectList = (() => {
  let projectLists = [];
  
  const addProject = (item) => {
    projectLists.push(item)
  }
  const removeProject = (item) => {
    projectLists = projectLists.filter(project => project != item);
  }
  const showProjects = () => projectLists;

  return { addProject, removeProject, showProjects }
})();

const Project = (title = 'Default') => {
  let todoList = [];

  const projectTitle = () => title;
  const todoLists = () => todoList;

  const append = (item) => {
    todoList.push(item);
  }
  const removeList = (item) => {
    todoList = todoList.filter(list => list != item);
  }
  const rename = (newName) => {
    title = newName;
  }  
  return {projectTitle, todoLists, append, removeList, rename}
}

export { Project, ProjectList }