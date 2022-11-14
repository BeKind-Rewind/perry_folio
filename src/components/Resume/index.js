import React from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

function Proficiencies() {
  AOS.init({
    once: true
  })
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('PerryResume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Perry_Resume.pdf';
        alink.click();
      })
    })
  }


  return (
    <section>
      <h2 className="bodyOfWork">Resume</h2>
      <div className='badge-container'>
        <div className='badge' data-aos='fade-right' data-aos-delay='500'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='400'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='300'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='200'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='100'></div>
        <div className='badge' data-aos='fade-right'></div>
      </div>
      <button onClick={onButtonClick}>
        Download PDF
      </button>

      <h2 className="proficiencies">Front-End Proficiencies</h2>
      <ul className="skillList">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2 className="proficiencies">Back-End Proficiencies</h2>
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