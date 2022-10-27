import React from 'react';
import Portrait from '../../assets/images/headshot.JPG'
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';


function About() {
  AOS.init({
    once: true
  });
  return (
    <section className="my-5">
      <div className='flex-row about'>
        <h1 className='about'>About Me</h1>
      </div>
      <div className='badge-container'>
        <div className='badge' data-aos='fade-right' data-aos-delay='500'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='400'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='300'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='200'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='100'></div>
        <div className='badge' data-aos='fade-right'></div>
      </div>
      <div className='flex-row'>
        <div>
          <img
            src={Portrait}
            alt="Portrait"
            className="portrait"
          />
        </div>

        <div className='flex-row'>
          <p> I am a full stack developer with experience in HTML, CSS, JavaScript, Bootstrap, MongoDB, Express.js, React.js, Node.js, IndexedDB, idb, MySQL, Sequelize and GraphQL. </p>
          <br />
          <p> I studied at The Ohio State University where I was also named BigTen All-American and in 2021 was inducted into The Ohio State University Athletics Hall of Fame. </p>
          <br />
          <p> "To Thine Own Self Be True" is a motto I live and work by: intentional, honest practice in the subject, no matter the medium, is the key to finding success!</p>
        </div>
      </div>
    </section>
  )
}

export default About;