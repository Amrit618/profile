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
            produce high-quality work.
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
          <h1> Hey this is a big card</h1>
          <h2>Time management</h2>
          <p>The time can be managed within your desired.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
