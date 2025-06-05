import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.codeEditor}>
        <pre className={styles.codeBlock}>
          <code>{`// About.jsx
import React from 'react';

const AboutMe = () => {
  const developer = {
    name: "Kanishk Pandey",
    title: "Full Stack Developer",
    experience: "3+ years",
    passion: "Creating amazing web experiences",
    currentFocus: ["React", "TypeScript", "Node.js"],

    getSkills() {
      return [
        "Frontend: React, Vue, TypeScript, HTML5, CSS3",
        "Backend: Node.js, Express, Python, MongoDB",
        "Tools: Git, Docker, AWS, Figma"
      ];
    }
  };

  return (
    <div className="about-container">
      <h1>About {developer.name}</h1>
      <p>
        I'm passionate about building user-centric applications
        that solve real-world problems. With {developer.experience} 
        of experience, I love turning ideas into reality.
      </p>
    </div>
  );
};

export default AboutMe;`}</code>
        </pre>
      </div>
    </div>
  );
};

export default About;