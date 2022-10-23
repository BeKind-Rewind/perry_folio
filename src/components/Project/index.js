import React from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import GithubLogo from '../../assets/logo/github_icon.png';


const Project = ({ project }) => {


  return (
    <div className="flex-row project-card">
      <img
        src={project.image}
        alt={project.title}
        className="img-thumbnail mx-1"
      />
      <div className="project-hover">
        <a href={project.url}>{project.title}</a>
        <a href="https://github.com/BeKind-Rewind/{project.github}" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faGithub} size="4x" className="icon" /></a>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;