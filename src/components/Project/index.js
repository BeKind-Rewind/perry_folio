import React from "react";
import GithubLogo from '../../assets/logo/github_icon.png';


const Project = ({ project }) => {
  // const [currentProject, setCurrentProject] = useState();

  return (
    <div className="flex-row project-card">
      <img
        src={project.image}
        alt={project.title}
        className="img-thumbnail mx-1"
      />
      <div className="project-hover">
        <a href={project.url}>{project.title}</a>
        <a href={project.github}>{GithubLogo}</a>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;