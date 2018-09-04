import { ProjectList } from "./project";
import { renderTableBody } from "./table";
import ClearTableTasks from "./clearTable";

const AddProjectClickEvents = () => {
  const projects = document.getElementsByClassName('project-name');
  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', (e) => {
      // Find the project based on what is clicked
      let project =  ProjectList.allProjects().find((element) => {
        return element.projectTitle() === e.target.textContent;
      });
      // Clear the tasks then adding back projects based on what is clicked
      ClearTableTasks();
      renderTableBody().renderTasks(project);
    });
  } 
  return { AddProjectClickEvents }
}

export default AddProjectClickEvents;