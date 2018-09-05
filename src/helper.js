import { ProjectList } from "./project";

const Helper = (() => {
  const findProjectByName = (name) => {
    let result = ProjectList.allProjects().find((element) => {
      return element.projectTitle() === name;
    });
    return result;
  }
  return { findProjectByName }
})();

export default Helper;