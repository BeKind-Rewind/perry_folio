import React from 'react';

function Portfolio() {
  const projects = [
    {
      name: "project1",
      description: "Project 1"
    },
    {
      name: "project2",
      description: "Project 2"
    },
    {
      name: "project3",
      description: "Project 3"
    },
    {
      name: "project4",
      description: "Project 4"
    },
    {
      name: "project5",
      description: "Project 5"
    },
    {
      name: "project6",
      description: "Project 6"
    }
  ];

  function projectSelected() {
    console.log(`{project.name}`)
  }

  return (
    <section>
      <h2>Some of my developer work:</h2>

      {projects.map((project) => (
        <li className="mx-1" key={project.name}>
          <span onClick={projectSelected}>
            {/* setting a key for the outermost element (required) */}
            {project.name}
          </span>
        </li>
      ))}
    </section>
  )
}

export default Portfolio;