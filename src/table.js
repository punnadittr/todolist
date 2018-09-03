const renderTable = () => {
  const headerList = ['Project', 'Task', 'Priority', 'Due Date'];

  const mainContainer = document.getElementById('main-container');

  const mainTableRow = document.createElement('div');
  const mainTableColumn = document.createElement('div');

  const tableElement = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableHeadRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  mainTableRow.className = 'row justify-content-center';
  mainTableColumn.className = 'col-md-8';

  tableElement.className = 'table table-borderless';

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

export default renderTable;