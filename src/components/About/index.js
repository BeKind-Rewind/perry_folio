import React from 'react';
import Portrait from '../../assets/images/headshot.JPG'

function About() {
  return (
    <section className="my-5">
      <img
        src={Portrait}
        alt="Portrait"
        className="portrait"
      />
      <h1 className='about'>About Me</h1>
      <div>
        <p> I am a full stack developer with experience in HTML, CSS, JavaScript, Bootstrap, MongoDB, Express.js, React.js, Node.js, IndexedDB, idb, MySQL, Sequelize and GraphQL. </p>
        <br />
        <p> I studied at The Ohio State University where I was also named BigTen All-American and in 2021 was inducted into The Ohio State University Athletics Hall of Fame. </p>
        <br />
        <p> "To Thine Own Self Be True" is a motto I live and work by: intentional, honest practice in the subject, no matter the medium, is the key to finding success!</p>
      </div>
    </section>
  )
}

export default About;