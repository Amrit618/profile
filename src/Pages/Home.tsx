import React from 'react';
import '../styles/HomePage.css';
import profileImage from '../images/profile-image.png';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

function Home() {
  return (

    <div className="home-page">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="profile-name">Amrit Bastakoti</h1>
        <p className="profile-title">Web Developer | Cloud Engineer</p>
        <Link to="/contact" className="hire-button">
          Hire me
        </Link>
      </div>

      <div className="cards-section">
        <div className="card">
          <h2 className="card-title">Passionate about Programming</h2>
          <p className="card-description">
            I am passionate about programming and always eager to learn new
            technologies. I believe that my passion for coding allows me to
            produce high-quality work.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Expert in Cloud Services</h2>
          <p className="card-description">
            I have hands-on experience with various cloud services like AWS,
            Azure, and GCP. I can help you optimize your cloud infrastructure
            and reduce your costs.
          </p>
        </div>

        <div className="big-card">
          <h1 className="big-card-title">Hey, this is a big card</h1>
          <h2 className="big-card-subtitle">Time management</h2>
          <p className="big-card-description">
            Time can be managed within your desired timeframe.
          </p>
          <Newsletter/>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
