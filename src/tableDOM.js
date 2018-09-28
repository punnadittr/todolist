import Table from "./table";
import Helper from "./helper";

const ProjectClickEvents = (() => {
  let currentProject;
  const addEventToProjectNames = () => {    
    const projects = document.getElementsByClassName('project-name');
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', (e) => {
      // Find the project based on what is clicked
      currentProject = Helper.findProjectByName(e.target.textContent);
      console.log(currentProject.projectTitle());
      // Clear the tasks then adding back projects based on what is clicked
      Table.resetTable();
      Table.renderTasks(currentProject)
      });
    }  
  };  
  const getCurrentProject = () => currentProject;

  return { addEventToProjectNames, getCurrentProject }
})();

export default ProjectClickEvents;