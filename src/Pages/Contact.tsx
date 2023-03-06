import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>You can reach me using the following methods:</p>
      <ul>
        <li>
          <a href="mailto:amritbastakoti618@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </li>
        <li>
          <a href="tel:+358414839992">
            <FontAwesomeIcon icon={faPhone} /> Phone
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amrit-b-4a3b471b2/">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/Amrit618">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
