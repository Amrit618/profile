import React from 'react';
import '../styles/HomePage.css';
import profileImage from '../images/profile-image.png';

function Home() {
  return (
    <div className="home-page">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" />
        <h1>Amrit Bastakoti</h1>
        <p>Web Developer | Cloud Engineer</p>
        <p></p>
        <button className="hire-button">Hire Me</button>
      </div>
    </div>
  );
}


export default Home;
