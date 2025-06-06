import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.backgroundAccent}></div>

      <div className={styles.aboutWrapper}>
        {/* Left Column: Main Content */}
        <motion.div
          className={styles.mainContent}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            About <span className={styles.accentText}>Me</span>
          </h2>

          <div className={styles.contentBlock}>
            <p>
              I'm a <span className={styles.highlight}>Full Stack Developer</span> with a passion for creating elegant, user-friendly web applications.
              With a background in computer science and 3+ years of hands-on experience, I approach each project
              as an opportunity to blend technical expertise with creative problem-solving.
            </p>

            <h3 className={styles.subheading}>
              <span className={styles.accentIcon}>✦</span> Experience & Expertise
            </h3>
            <p>
              My development journey began with JavaScript and has expanded to encompass modern frameworks and tools.
              I've built responsive web applications, e-commerce platforms, and interactive dashboards using
              <span className={styles.highlight}> React, Node.js, and TypeScript</span>. Notable projects include
              a real-time analytics dashboard and a custom CMS for content creators.
            </p>

            <h3 className={styles.subheading}>
              <span className={styles.accentIcon}>✦</span> Skills
            </h3>
            <div className={styles.skillsContainer}>
              <motion.div
                className={styles.skillCategory}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.skillCategoryHeader}>
                  <span className={styles.skillIcon}>💻</span>
                  <h4>Technical Skills</h4>
                </div>
                <ul className={styles.skillsList}>
                  <li>Frontend: React, Vue, TypeScript, HTML5/CSS3</li>
                  <li>Backend: Node.js, Express, MongoDB, SQL</li>
                  <li>Tools: Git, Docker, AWS, Webpack</li>
                  <li>Design: Figma, Responsive Design, UI/UX principles</li>
                </ul>
              </motion.div>

              <motion.div
                className={styles.skillCategory}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.skillCategoryHeader}>
                  <span className={styles.skillIcon}>🧠</span>
                  <h4>Soft Skills</h4>
                </div>
                <ul className={styles.skillsList}>
                  <li>Problem Solving</li>
                  <li>Communication</li>
                  <li>Team Collaboration</li>
                  <li>Project Management</li>
                </ul>
              </motion.div>
            </div>

            <h3 className={styles.subheading}>
              <span className={styles.accentIcon}>✦</span> Beyond Coding
            </h3>
            <p>
              When I'm not crafting code, you'll find me exploring hiking trails, experimenting with new coffee brewing
              techniques, or diving into science fiction novels. These activities help me maintain a creative mindset
              that influences my development approach.
            </p>

            <div className={styles.callToAction}>
              <div className={styles.ctaGlow}></div>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Let's connect and build something amazing together!
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Card */}
        <motion.div
          className={styles.profileCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.photoContainer}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
              alt="Kanishk Pandey"
              className={styles.profilePhoto}
            />
            <div className={styles.photoOutline}></div>
          </div>
          <h3 className={styles.profileName}>Kanishk Pandey</h3>
          <p className={styles.profileTagline}>
            <span className={styles.tagHighlight}>Web Developer</span> | Tech Enthusiast
          </p>

          <div className={styles.profileDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📍</span>
              <span>San Francisco, CA</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>💼</span>
              <span>Available for Freelance</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>🎓</span>
              <span>B.S. Computer Science</span>
            </div>
          </div>

          <div className={styles.codeSnippet}>
            <div className={styles.snippetHeader}>
              <div className={styles.controls}>
                <span className={styles.controlDot} style={{ backgroundColor: "#FF4565" }}></span>
                <span className={styles.controlDot} style={{ backgroundColor: "#ffbd44" }}></span>
                <span className={styles.controlDot} style={{ backgroundColor: "#00ca4e" }}></span>
              </div>
              <span className={styles.filename}>skills.js</span>
            </div>
            <pre className={styles.snippetCode}>
              <code>{`const skills = {
  frontend: ["React", "TypeScript"],
  backend: ["Node.js", "Express"],
  languages: ["JavaScript", "Python"],
  learning: "Always"
};`}</code>
            </pre>
          </div>

          <motion.a
            href="#contact"
            className={styles.connectButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;