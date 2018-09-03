const Project = (title = 'default') => {
  let todoList = [];

  const projectTitle = () => title;
  const projectList = () => todoList;

  const append = (item) => {
    todoList.push(item);
  }
  const removeList = (item) => {
    todoList = todoList.filter(list => list != item);
  }
  const rename = (newName) => {
    title = newName;
  }
  return {projectTitle, projectList, append, removeList, rename}
}

export default Project;