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
        <button className="hire-button">How can I help You?</button>
      </div>
      <div className="cards-section">
        <div className="card">
          <h2>Passionate about Programming</h2>
          <p>
            I am passionate about programming and always eager to learn new
            technologies. I believe that my passion for coding allows me to
            produce high-quality work.yes high
          </p>
        </div>
        <div className="card">
          <h2>Expert in Cloud Services</h2>
          <p>
            I have hands-on experience with various cloud services like AWS,
            Azure, and GCP. I can help you optimize your cloud infrastructure
            and reduce your costs.
          </p>
        </div>
        <div className="big-card">
          <h2>About Me</h2>
          <p>
            Hi! My name is Amrit and I am a web developer and cloud engineer. I
            am passionate about building high-quality web applications that are
            easy to use and visually appealing. I have experience working with
            various web technologies including React, Node.js, and Express.js.
            In addition to web development, I am also an expert in cloud
            services like AWS, Azure, and GCP. I can help you build a scalable
            and cost-effective cloud infrastructure for your applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
