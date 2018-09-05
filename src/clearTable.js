import { renderTableBody } from "./table";
import ProjectClickEvents from "./tableDOM";

const ClearTableTasks = () => {
  const mainTable = document.getElementById('main-table');
  const removing = mainTable.childNodes[1];
  mainTable.removeChild(removing);

  renderTableBody().renderProjectNames();
  ProjectClickEvents.clickToViewTasks();
}

export default ClearTableTasks;