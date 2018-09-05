import { ProjectList } from "./project";
import { renderTableBody } from "./table";
import ClearTableTasks from "./clearTable";
import Helper from "./helper";

const ProjectClickEvents = (() => {
  let currentProject;
  const clickToViewTasks = () => {    
    const projects = document.getElementsByClassName('project-name');
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', (e) => {
      // Find the project based on what is clicked
      currentProject = Helper.findProjectByName(e.target.textContent);
      console.log(currentProject.projectTitle());
      // Clear the tasks then adding back projects based on what is clicked
      ClearTableTasks();
      renderTableBody().renderTasks(currentProject);
      });
    }  
  };  
  const getCurrentProject = () => currentProject;

  return { clickToViewTasks, getCurrentProject }
})();

export default ProjectClickEvents;