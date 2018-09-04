import { ProjectList } from "./project";

const renderTableHead = () => {
  const headerList = ['Project', 'Task', 'Priority', 'Due Date'];

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
    temprow.innerText = headerList[header];
    tableHeadRow.appendChild(temprow);
  };
  
  tableHead.appendChild(tableHeadRow);
  tableElement.appendChild(tableHead);
  mainTableColumn.appendChild(tableElement);
  mainTableRow.appendChild(mainTableColumn);
  mainContainer.appendChild(mainTableRow);
}

const renderTableBody = () => {
  const tableBody = document.createElement('tbody');
  const mainTable = document.getElementById('main-table');

  const renderProjectNames = () => {
    ProjectList.showProjects().forEach((project, index) => {
      let temprow = document.createElement('tr');
      let tempData = document.createElement('td');

      tableBody.id = 'table-body';

      temprow.id = index;

      tempData.innerText = project.projectTitle();
      tempData.className = 'project-name';

      temprow.appendChild(tempData);
      tableBody.appendChild(temprow);    
      mainTable.appendChild(tableBody);
    });
  }

  const renderTasks = () => {
    let currentProject = ProjectList.showProjects()[0];
    const currentBody = document.getElementById('table-body');

    currentProject.todoLists().forEach((list, i) => {
      let appendingRow = document.getElementById(`${i}`);

      if (appendingRow === null) {
        appendingRow = document.createElement('tr');
        appendingRow.id = `${i}`;
        let emptyTableData = document.createElement('td');
        appendingRow.appendChild(emptyTableData);
        currentBody.appendChild(appendingRow);
      }

      let tempDataTitle = document.createElement('td');
      let tempDataPriority = document.createElement('td');
      let tempDataDueDate = document.createElement('td');

      tempDataTitle.innerText = `${list.listTitle()}`;
      tempDataPriority.innerText = `${list.listPriority()}`;
      tempDataDueDate.innerText = `${list.listDueDate()}`;

      appendingRow.appendChild(tempDataTitle);
      appendingRow.appendChild(tempDataPriority);
      appendingRow.appendChild(tempDataDueDate);
    });
  }
  return { renderProjectNames, renderTasks }
}

export { renderTableHead, renderTableBody };