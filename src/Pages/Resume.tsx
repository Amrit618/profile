import React from 'react';
import '../styles/Resume.css';

interface CVProps {
  name: string;
  title: string;
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    duration: number;
    description: string;
  }>;
  education: Array<{ degree: string; institution: string; duration: string }>;
}

const Resume: React.FC<CVProps> = ({
  name,
  title,
  summary,
  experience,
  education,
}) => {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="cv-summary">
        <p>{summary}</p>
      </div>
      <div className="cv-experience">
        <h3>Experience</h3>
        {experience.map((exp) => (
          <div key={exp.title}>
            <h4>{exp.title}</h4>
            <p>{exp.company}</p>
            <p>{exp.duration}</p>
            <ul>
              {exp.description.split('\n').map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="cv-education">
        <h3>Education</h3>
        {education.map((edu) => (
          <div key={edu.degree}>
            <h4>{edu.degree}</h4>
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Resume;
