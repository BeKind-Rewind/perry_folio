import React from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

function Proficiencies() {
  AOS.init({
    once: true
  })

  return (
    <section>
      <h1 className="bodyOfWork">Resume</h1>
      <div className='badge-container'>
        <div className='badge' data-aos='fade-right' data-aos-delay='500'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='400'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='300'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='200'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='100'></div>
        <div className='badge' data-aos='fade-right'></div>
      </div>
      <a href="https://docs.google.com/document/d/1-t7I3CEBefaZVAIUOHCklmxDTMMsguly/edit?usp=sharing&ouid=113213651861629897307&rtpof=true&sd=true" target="_blank" rel="noreferrer">
        <button className="rounded-full">Download my resume</button>
      </a>


      <h3 className="proficiencies">Front-End Proficiencies</h3>
      <ul className="skillList">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3 className="proficiencies">Back-End Proficiencies</h3>
      <ul className="skillList">
        <li>API's</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose, IndexedDB</li>
      </ul>
    </section>
  )
}

export default Proficiencies;