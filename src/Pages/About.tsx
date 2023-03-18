import React from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    marginBottom: '16px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
  },
  intro: {
    paddingBottom: '16px',
  },
  skills: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  hireMe: {
    marginTop: '32px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  heading: {
    marginTop: '64px',
  },
});

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>About Me</h1>
      <Card className={classes.card}>
        <CardContent className={classes.intro}>
          <h2>Introduction</h2>
          <p>
            Hi there! I'm an enthusiastic coder with a passion for JavaScript
            and cloud services.Over seven years of increasing expertise in Web
            Development and two years of experience in Cloud Engineering,
            experienced in designing and developing responsive websites and
            cloud-based solutions using modern technologies and frameworks.
            Collaborates effectively with cross-functional teams to identify
            business needs and develop solutions that meet project goals.
            Passionate about delivering high-quality work and continuously
            improving technical skills to meet the ever-changing demands of the
            industry.
          </p>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent className={classes.skills}>
          <h2>Skills and Experience</h2>
          <ul>
            <li>Strong proficiency in JavaScript, HTML, and CSS</li>
            <li>Experience with cloud services such as AWS and Azure</li>
            <li>Hands-on experience with Node.js, React, and Redux</li>
            <li>Excellent problem-solving and analytical skills</li>
            <li>Strong communication and teamwork skills</li>
          </ul>
        </CardContent>
      </Card>
      <div className={classes.hireMe}>
        <Button variant="contained" color="primary">
          Hire Me
        </Button>
      </div>
    </div>
  );
};

export default About;
