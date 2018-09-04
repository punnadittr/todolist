import renderTodoSkeleton from "./skeleton";
import { renderTableHead, renderTableBody } from "./table";
import ToDoList from "./todolist";
import { Project, ProjectList } from "./project" ;
import AddProjectClickEvents from "./tableDOM";
import { ProjectButtons, TaskButtons } from "./buttons";
import { ProjectModal, TaskModal } from "./modals";

const myProject = Project('FestBrooke');
const myProject2 = Project('Twiiter');

const task1 = ToDoList('water my plants', '12AUG18', 3);
const task2 = ToDoList('shit my pants', '19AUG18', 3);
const task3 = ToDoList('do something', '15OCT18', 3);

const task4 = ToDoList('change the world', '16AUG19', 2);
const task5 = ToDoList('change the world', '16AUG19', 2);
const task6 = ToDoList('change the world', '16AUG19', 2);

myProject.append(task1);
myProject.append(task2);
myProject.append(task3);

myProject2.append(task4);
myProject2.append(task5);
myProject2.append(task6);

ProjectList.addProject(myProject);
ProjectList.addProject(myProject2);
console.log(ProjectList.allProjects());

renderTodoSkeleton('TO DO LIST');
renderTableHead();
renderTableBody().renderProjectNames();
AddProjectClickEvents();
ProjectModal.renderAddProjectModal();
TaskModal.renderAddTaskModal();
ProjectButtons().renderAddProjectButton();

TaskButtons().renderAddTaskButton();
