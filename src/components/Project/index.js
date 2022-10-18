import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/project1/avo.jpeg";

function Project() {
  const currentProject = {
    name: "project1",
    description: "project1"
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{capitalizeFirstLetter(currentProject.name)}</p>
      <div>
        <img
          src={photo}
          alt="avo"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default { Project };