import { ProjectList } from "./project";
import ProjectClickEvents from "./tableDOM";

const Table = (() => {
  const renderTableHead = () => {
    const headerList = ['Project', 'Task', 'Priority', 'DueDate'];

    const mainContainer = document.getElementById('main-container');

    const mainTableRow = document.createElement('div');
    const mainTableColumn = document.createElement('div');
    const tableElement = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');

    mainTableRow.className = 'row justify-content-center';
    mainTableColumn.className = 'col-md-8';

    tableElement.className = 'table table-borderless';
    tableElement.id = 'main-table';

    tableHead.className = 'thead-light';

    for (let header in headerList) {
      let temprow = document.createElement('th');
      temprow.scope = 'col';
      temprow.id = headerList[header];
      temprow.innerText = headerList[header];
      tableHeadRow.appendChild(temprow);
    };
    
    tableHead.appendChild(tableHeadRow);
    tableElement.appendChild(tableHead);
    mainTableColumn.appendChild(tableElement);
    mainTableRow.appendChild(mainTableColumn);
    mainContainer.appendChild(mainTableRow);
  }

  const renderProjectNames = () => {
    const tableBody = document.createElement('tbody');
    const mainTable = document.getElementById('main-table');

    ProjectList.allProjects().forEach((project, index) => {
      let temprow = document.createElement('tr');
      let tempData = document.createElement('td');

      tableBody.id = 'table-body';

      temprow.id = `row-${index}`;

      tempData.innerText = project.projectTitle();
      tempData.className = 'project-name';

      temprow.appendChild(tempData);
      tableBody.appendChild(temprow);    
      mainTable.appendChild(tableBody);
    });
  }

  const renderTasks = (project) => {
    const currentProject = project;
    const currentBody = document.getElementById('table-body');

    currentProject.todoLists().forEach((list, i) => {
      let appendingRow = document.getElementById(`row-${i}`);

      // If row is not created yet, create a new row
      if (appendingRow === null) {
        appendingRow = document.createElement('tr');

        appendingRow.id = `row-${i}`;

        // Empty td element created for every row of tasks
        let emptyTableData = document.createElement('td');

        emptyTableData.className = 'placeholder';

        appendingRow.appendChild(emptyTableData);
        currentBody.appendChild(appendingRow);
      }

      let tempDataTitle = document.createElement('td');
      let tempDataPriority = document.createElement('td');
      let tempDataDueDate = document.createElement('td');

      tempDataTitle.className = 'task-title';
      tempDataPriority.className = 'task-priority';
      tempDataDueDate.className = 'task-duedate';

      tempDataTitle.innerText = `${list.listTitle()}`;
      tempDataPriority.innerText = `${list.listPriority()}`;
      tempDataDueDate.innerText = `${list.listDueDate()}`;

      appendingRow.appendChild(tempDataTitle);
      appendingRow.appendChild(tempDataPriority);
      appendingRow.appendChild(tempDataDueDate);
    });
  }
  const resetTable = () => {
    const mainTable = document.getElementById('main-table');
    const removing = mainTable.childNodes[1];
    mainTable.removeChild(removing);
  
    renderProjectNames();
    ProjectClickEvents.addEventToProjectNames();
  };
    return { renderTableHead, renderProjectNames, renderTasks, resetTable }
})();

export default Table;