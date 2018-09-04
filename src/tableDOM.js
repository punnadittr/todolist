const getProjectNameFromClick = () => {
  const projects = document.getElementsByClassName('project-name');
  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', (e) => {
      console.log(e.target.textContent);
    });
  } 
}

export default getProjectNameFromClick;