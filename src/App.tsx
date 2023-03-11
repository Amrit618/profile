import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
import Resume from './Pages/Resume';
import cvData from './cvData';


const App: React.FC =()=> {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume {...cvData} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
