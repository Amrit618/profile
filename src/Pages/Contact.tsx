import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/Contact.css';

config.autoAddCss = false;

const Contact: React.FC = () => {
    const handleSubmit = () => {
      alert('Thank you, your message has been sent!');
    };
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-methods">
        <div className="contact-method">
          <a href="mailto:example@example.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email</span>
          </a>
        </div>
        
        <div className="contact-method">
          <a href="tel:123456789">
            <FontAwesomeIcon icon={faPhone} />
            <span>Phone</span>
          </a>
        </div>
        <div className="contact-method">
          <a href="https://www.linkedin.com/in/your-linkedin-profile">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="contact-method">
          <a href="https://github.com/your-github-username">
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
          </a>

        </div>
      </div>
      <div className="whats-on-your-mind">
        <h2>What's on your mind?</h2>
        <textarea placeholder="Your space here..."></textarea>
        <button onClick = {handleSubmit}className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
