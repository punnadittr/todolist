import renderTodoSkeleton from "./skeleton";
import { Project, ProjectList } from "./project" ;
import ProjectClickEvents from "./tableDOM";
import { ProjectButtons, TaskButtons } from "./buttons";
import ButtonDOM from "./buttonDOM";
import Helper from "./helper";
import Table from "./table";

const defaultProject = Project('Default');
ProjectList.addProject(defaultProject);

renderTodoSkeleton('TO DO LIST');

Table.renderTableHead();
Table.renderProjectNames();

ProjectClickEvents.addEventToProjectNames();
ProjectButtons.renderAddProjectButton();
TaskButtons.renderAddTaskButton();

ButtonDOM.addEventToProjectIcon();
ButtonDOM.addEventToTaskIcon();

console.log(Helper.findProjectByName('FestBrooke'));