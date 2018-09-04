import renderTodoSkeleton from "./skeleton";
import { renderTableHead, renderTableBody } from "./table";
import ToDoList from "./todolist";
import { Project, ProjectList } from "./project" ;
import getProjectNameFromClick from "./tableDOM";

const myProject = Project('default');
const myProject2 = Project('not_default')
const task1 = ToDoList('water my plants', '12AUG18', 3);
const task2 = ToDoList('shit my pants', '19AUG18', 3);
const task3 = ToDoList('do something', '15OCT18', 3);

myProject.append(task1);
myProject.append(task2);
myProject.append(task3);

ProjectList.addProject(myProject);
ProjectList.addProject(myProject2);
console.log(myProject.todoLists());

renderTodoSkeleton('TO DO LIST');
renderTableHead();
renderTableBody().renderProjectNames();
renderTableBody().renderTasks();