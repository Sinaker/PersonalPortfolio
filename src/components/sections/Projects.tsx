import React from 'react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                    <h3>VSCode Portfolio</h3>
                    <p>A creative portfolio website mimicking VSCode interface</p>
                    <div className={styles.techStack}>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Framer Motion</span>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <h3>E-Commerce Platform</h3>
                    <p>Full-stack e-commerce solution with payment integration</p>
                    <div className={styles.techStack}>
                        <span>Next.js</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <h3>Task Management App</h3>
                    <p>Collaborative task management with real-time updates</p>
                    <div className={styles.techStack}>
                        <span>Vue.js</span>
                        <span>Socket.io</span>
                        <span>PostgreSQL</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;