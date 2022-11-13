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
          <p> I am a full stack developer with experience in HTML, CSS, JavaScript, Bootstrap, Express.js, React.js, Node.js, IndexedDB, MySQL, Sequelize, Mongoose and MongoDB. </p>
          <br />
          <p> I studied at The Ohio State University where I was also named BigTen All-American and in 2021 was inducted into The Ohio State University Athletics Hall of Fame.
            I've spent twenty-two years competitively in the sport and continue to bring those many lessons of dedication, teamwork, management, and fearless persuit of success
            to the other aspects of my life (while having fun!).</p>
          <br />
          <p> “Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life.” — Roy T. Bennett </p>
        </div>
      </div>
    </section>
  )
}

export default About;