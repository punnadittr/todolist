import { renderTableBody } from "./table";
import AddProjectClickEvents from "./tableDOM";

const ClearTableTasks = () => {
  const mainTable = document.getElementById('main-table');
  const removing = mainTable.childNodes[1];
  mainTable.removeChild(removing);

  renderTableBody().renderProjectNames();
  AddProjectClickEvents();
}

export default ClearTableTasks;