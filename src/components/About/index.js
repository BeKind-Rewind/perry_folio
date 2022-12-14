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
      <div className='flex-row' id='info-box'>
        <div id='portrait'>
          <img
            src={Portrait}
            alt="Portrait"
            className="portrait"
          />
        </div>

        <div className='bio' id='about'>
          <p> I am a full stack web developer in Dallas, TX with experience in HTML5, CSS, JavaScript, Bootstrap, Express.js,
            React.js, Node.js, IndexedDB, MySQL, Sequelize, Mongoose and MongoDB.
          </p>
          <br />
          <p>
            Education:
            Recently, I graduated from Southern Methodist University's Full Stack Bootcamp where I juggled the rigors and challenges of a fast-paced
            tech environment, learning new skills and working in groups, in tandem with a full-time job as a career competitive rowing coach.
            In undergrad, I studied Music Education and was a Varsity rower at The Ohio State University.
          </p>
          <p>
            Educator, Musician, & Athlete:
            This is also where I decided to try something different and walked-on to the women's varsity rowing team. I found a great deal of
            success as a student-athlete (BigTen All-American and 2021 Athletics Hall of Fame.). The experience was exceptionally demanding and
            exponentially rewarding!
          </p>
          <br />
          <p>
            “Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life.” — Roy T. Bennett
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;