import React, { useState } from 'react';
import Project from '../Project';
import TooGoodToWasteImg from '../../assets/images/TooGoodToWaste.png'
import NewsBuddyImg from '../../assets/images/NewsBuddy.png'
import TrackerImg from '../../assets/images/Tracker.png'
import AltSocButterflyImg from '../../assets/images/AltSocButterfly.png'
import StaffGeneratorImg from '../../assets/images/StaffGenerator.png'
import SchedulerImg from '../../assets/images/Scheduler.png'
import JATEImg from '../../assets/images/JATE.png'
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';


function Portfolio() {
  AOS.init({
    once: true
  })
  const [projects] = useState([
    {
      title: 'Too Good To Waste',
      project: 'TooGoodToWaste',
      url: 'https://too-good-2-waste.herokuapp.com/',
      description: 'MERN app',
      image: TooGoodToWasteImg,
      github: 'https://github.com/dmadon/too-good-to-waste/tree/main'
    },
    {
      title: 'News Buddy',
      project: 'NewsBuddy',
      url: 'https://bekind-rewind.github.io/news-buddy/',
      description: 'Web API',
      image: NewsBuddyImg,
      github: 'https://github.com/BeKind-Rewind/animal-app'
    },
    {
      title: 'Employee Tracker',
      project: 'Tracker',
      url: 'https://drive.google.com/file/d/1bVKxcLBMxBYIEXLyG6Os-Yb09uSlzse5/view',
      description: 'MySQL2',
      image: TrackerImg,
      github: 'https://github.com/BeKind-Rewind/subsequent-employee-tracker'
    },
    {
      title: 'Alternative Social Butterfly',
      project: 'AltSocButterfly',
      url: 'https://intense-stream-74213.herokuapp.com/',
      description: 'Express, Handlebars, BCrypt',
      image: AltSocButterflyImg,
      github: 'https://github.com/BeKind-Rewind/alternative_social_app'
    },
    {
      title: 'Staff Generator',
      project: 'StaffGenerator',
      url: 'https://drive.google.com/file/d/1j-YqgBvROqMf9tmHOI8aMSw_sZTiiDAG/view',
      description: 'Dynamic rendering, Node, Jest',
      image: StaffGeneratorImg,
      github: 'https://github.com/BeKind-Rewind/nonstop_squad_generator'
    },
    {
      title: 'Work Day Scheduler',
      project: 'Scheduler',
      url: 'https://bekind-rewind.github.io/schedule-gator/',
      description: 'Moment, jQuery, Bootstrap',
      image: SchedulerImg,
      github: 'https://github.com/BeKind-Rewind/schedule-gator'
    },
    {
      title: 'Just Another Text Editor',
      project: 'JATE',
      url: 'https://damp-escarpment-93332.herokuapp.com/',
      description: 'PWA using IndexedDB API, Webpack',
      image: JATEImg,
      github: 'https://github.com/BeKind-Rewind/urban_text_editor'
    }
  ]);


  return (
    <section>
      <h1 className='works'>Some of my developer work</h1>
      <div className='badge-container'>
        <div className='badge' data-aos='fade-right' data-aos-delay='500'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='400'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='300'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='200'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='100'></div>
        <div className='badge' data-aos='fade-right'></div>
      </div>
      <ul className='flex-row wrap'>
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </ul>
    </section>
  )
}

export default Portfolio;