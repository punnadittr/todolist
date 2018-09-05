import renderTodoSkeleton from "./skeleton";
import { renderTableHead, renderTableBody } from "./table";
import ToDoList from "./todolist";
import { Project, ProjectList } from "./project" ;
import ProjectClickEvents from "./tableDOM";
import { ProjectButtons, TaskButtons } from "./buttons";
import { ProjectModal, TaskModal } from "./modals";
import ButtonDOM from "./buttonDOM";
import Helper from "./helper";

const defaultProject = Project('Default');
ProjectList.addProject(defaultProject);

renderTodoSkeleton('TO DO LIST');
renderTableHead();
renderTableBody().renderProjectNames();

ProjectClickEvents.clickToViewTasks();
ProjectButtons.renderAddProjectButton();
TaskButtons.renderAddTaskButton();

ButtonDOM.addProjectIconDOM();
ButtonDOM.addTaskIconDOM();

console.log(Helper.findProjectByName('FestBrooke'));