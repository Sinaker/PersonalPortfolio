import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                    <h3>Frontend</h3>
                    <ul>
                        <li>React & React Native</li>
                        <li>TypeScript & JavaScript</li>
                        <li>HTML5 & CSS3</li>
                        <li>Vue.js & Angular</li>
                    </ul>
                </div>
                <div className={styles.skillCategory}>
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js & Express</li>
                        <li>Python & Django</li>
                        <li>PostgreSQL & MongoDB</li>
                        <li>REST APIs & GraphQL</li>
                    </ul>
                </div>
                <div className={styles.skillCategory}>
                    <h3>Tools & Others</h3>
                    <ul>
                        <li>Git & GitHub</li>
                        <li>Docker & AWS</li>
                        <li>Figma & Adobe XD</li>
                        <li>Jest & Cypress</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;