const ToDoList = (title, dueDate, priority) => {
  let complete = false;
  let checkList = [];
  
  const checkLists = () => checkList;
  const listTitle = () => title;
  const listDueDate = () => dueDate;
  const listPriority = () => priority;
  const taskDone = () => complete;

  // Add a string to the checklist 
  const addTocheckList = (item) => {
    checkList.push(item);
  };
  const removeFromcheckList = (item) => {
    checkList = checkList.filter(list => list != item);
  };
  const changeTitle = (newTitle) => {
    title = newTitle;
  };
  const changePriority = (newPriority) => {
    priority = newPriority;
  };
  const changeDate = (newDate) => {
    dueDate = newDate;
  };

  return { checkLists, listTitle, listDueDate, listPriority, taskDone,
          addTocheckList, removeFromcheckList, changeTitle, changePriority, changeDate }
}

export default ToDoList;