import React from 'react';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.resumeContainer}>
                <div className={styles.resumeHeader}>
                    <h1>Kanishk Pandey</h1>
                    <p>Full Stack Developer</p>
                </div>
                <div className={styles.resumeSection}>
                    <h3>Experience</h3>
                    <div className={styles.experienceItem}>
                        <h4>Senior Frontend Developer</h4>
                        <p>TechCorp Inc. • 2022 - Present</p>
                        <ul>
                            <li>Led development of React-based dashboard application</li>
                            <li>Improved application performance by 40%</li>
                            <li>Mentored junior developers on best practices</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.resumeSection}>
                    <h3>Education</h3>
                    <div className={styles.educationItem}>
                        <h4>B.Tech Computer Science</h4>
                        <p>University Name • 2018 - 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;