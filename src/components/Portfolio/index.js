import React, { useState } from 'react';
import Project from '../Project';
import NewsBuddyImg from '../../assets/images/NewsBuddy.png'
import TrackerImg from '../../assets/images/Tracker.png'
import AltSocButterflyImg from '../../assets/images/AltSocButterfly.png'
import StaffGeneratorImg from '../../assets/images/StaffGenerator.png'
import SchedulerImg from '../../assets/images/Scheduler.png'
import JATEImg from '../../assets/images/JATE.png'


function Portfolio() {
  const [projects] = useState([
    {
      title: 'News Buddy',
      project: 'NewsBuddy',
      url: 'https://bekind-rewind.github.io/animal-app/',
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
      <h2>Some of my developer work:</h2>
      <ul className='flex-row'>
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </ul>
    </section>
  )
}

export default Portfolio;