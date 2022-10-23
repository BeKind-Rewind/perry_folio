import React from 'react';

function Proficiencies() {
  return (
    <section>
      <h2 className="bodyOfWork">Resume</h2>
      <p className="resume">Resume</p>

      <h2 className="proficiencies">Front-End Proficiencies</h2>
      <ul className="skillList">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2 className="proficiencies">Back-End Proficiencies</h2>
      <ul className="skillList">
        <li>API's</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
      </ul>
    </section>
  )
}

export default Proficiencies;