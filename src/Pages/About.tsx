import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="intro">
        <p>
          Hi there! I'm a enthusiastic coder with a passion for JavaScript and
          cloud services.
        </p>
      </div>
      <div className="skills">
        <h2>Skills and Experience</h2>
        <ul>
          <li>Strong proficiency in JavaScript, HTML, and CSS</li>
          <li>Experience with cloud services such as AWS and Azure</li>
          <li>Hands-on experience with Node.js, React, and Redux</li>
          <li>Excellent problem-solving and analytical skills</li>
          <li>Strong communication and teamwork skills</li>
        </ul>
      </div>
      <div className="hire-me">
        <Link to="/contact">
          <button>Hire Me</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
