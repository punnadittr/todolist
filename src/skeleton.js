const renderTodoSkeleton = (text) => {
  const container = document.createElement('div');
  const jumbotron = document.createElement('div');
  const mainRow = document.createElement('div');
  const mainColumn = document.createElement('div');
  const displayText = document.createElement('h1');

  container.className = 'container';
  container.id = 'main-container';

  jumbotron.className = 'jumbotron';

  mainRow.className = 'row justify-content-center';
  mainColumn.className = 'col-md-8';

  displayText.className = 'text-center display-3';
  displayText.innerHTML = text;

  mainColumn.appendChild(displayText);
  mainRow.appendChild(mainColumn);
  jumbotron.appendChild(mainRow);
  container.appendChild(jumbotron);
  document.body.prepend(container);
};

export default renderTodoSkeleton;