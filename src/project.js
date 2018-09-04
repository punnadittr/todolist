const ProjectList = (() => {
  let projectLists = [];

  const addProject = (item) => {
    projectLists.push(item)
  }
  const removeProject = (item) => {
    projectLists = projectLists.filter(project => project != item);
  }
  const allProjects = () => projectLists;

  return { addProject, removeProject, allProjects }
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