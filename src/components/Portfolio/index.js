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
      url: '',
      description: 'Doggo stress-reducer!',
      image: NewsBuddyImg,
      github: 'https://github.com/BeKind-Rewind/animal-app'
    },
    {
      title: 'Employee Tracker',
      project: 'Tracker',
      url: '',
      description: 'Org Chart',
      image: TrackerImg,
      github: 'https://github.com/BeKind-Rewind/subsequent-employee-tracker'
    },
    {
      title: 'Alternative Social Butterfly',
      project: 'AltSocButterfly',
      url: '',
      description: 'Post, Comment, Profile Img Upload',
      image: AltSocButterflyImg,
      github: 'https://github.com/BeKind-Rewind/alternative_social_app'
    },
    {
      title: 'Staff Generator',
      project: 'StaffGenerator',
      url: '',
      description: 'Manage Staff',
      image: StaffGeneratorImg,
      github: 'https://github.com/BeKind-Rewind/nonstop_squad_generator'
    },
    {
      title: 'Work Day Scheduler',
      project: 'Scheduler',
      url: '',
      description: 'Scheduler',
      image: SchedulerImg,
      github: 'https://github.com/BeKind-Rewind/schedule-gator'
    },
    {
      title: 'Just Another Test Editor',
      project: 'JATE',
      url: '',
      description: 'Downloadable text editor',
      image: JATEImg,
      github: 'https://github.com/BeKind-Rewind/urban_text_editor'
    }
  ]);


  return (
    <section>
      <h2>Some of my developer work:</h2>

      {projects.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </section>
  )
}

export default Portfolio;