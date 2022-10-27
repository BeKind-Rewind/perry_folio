import React from 'react';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="footer d-flex fixed-bottom">
      <a href="https://www.facebook.com/Challenge641" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faFacebook} size="4x" className="icon" /></a>
      <a href="https://www.instagram.com/pieceinourtime/" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faInstagram} size="4x" className="icon" /></a>
      <a href="https://www.linkedin.com/in/amanda-perry-713b0955" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faLinkedin} size="4x" className="icon" /></a>
      <a href="https://github.com/BeKind-Rewind/" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faGithub} size="4x" className="icon" /></a>
    </div>
  )
}

export default Footer;