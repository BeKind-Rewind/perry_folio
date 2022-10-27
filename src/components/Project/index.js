import React from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import GithubLogo from '../../assets/logo/github_icon.png';


const Project = ({ project }) => {


  return (
    <div className="flex-row project-card card">
      <img
        src={project.image}
        alt={project.title}
        className="img-thumbnail mx-1"
      />
      <div className="project-hover card">
        <a className="project-title-hover" href={project.url}>{project.title}</a>
        <br />
        <a href={project.github} target="blank" className="project-github-hover"><FontAwesomeIcon icon={faGithub} size="2x" margin="bottom" className="icon" /></a>
        <p className="project-description-hover">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;