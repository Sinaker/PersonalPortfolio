import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from '../../reactbits/TextAnimations/RotatingText/RotatingText';
import Squares from '../../reactbits/Backgrounds/Squares/Squares';
import styles from './Home.module.css';
import { useStore } from '../../store/useStore'; // Import the store
import { TbBrandLeetcode } from "react-icons/tb";

const Home: React.FC = () => {
    const { selectFile } = useStore(); // Get the selectFile function from the store

    const rotatingPhrases = [
        "Turning bad ideas into code since 2023.",
        "Building scalable solutions that grow like my sleeping addiction.",
        "Full Stack Developer by day, procrastinator by night.",
        "Turning data into insights with ML and AI.",
        "Crafting user experiences that don't crash... usually.",
    ];

    // Handle navigation to Projects tab
    const handleViewProjects = (e: React.MouseEvent) => {
        e.preventDefault();
        selectFile("projects");
    };

    // Handle navigation to Contact tab
    const handleContactMe = (e: React.MouseEvent) => {
        e.preventDefault();
        selectFile("contact");
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.backgroundWrapper}>
                <Squares
                    direction="diagonal"
                    speed={0.5}
                    borderColor="#3a3f5c"
                    squareSize={40}
                    hoverFillColor="#ff105f"
                />
                <div className={styles.gradientOverlay}></div>
            </div>

            <motion.div
                className={styles.socialIcons}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
            >
                <a href="https://github.com/Sinaker" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <motion.div
                        whileHover={{ color: '#ffffff' }}
                        style={{ color: 'currentColor' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </motion.div>
                </a>
                <a href="https://linkedin.com/in/kanishkkpandey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <motion.div
                        whileHover={{ color: '#0077b5' }}
                        style={{ color: 'currentColor' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </motion.div>
                </a>
                <a
                    href="https://leetcode.com/Zephylus"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                    style={{ position: 'relative' }}
                >
                    <motion.div
                        whileHover={{ color: '#fca121' }}
                        style={{ color: 'currentColor' }}
                    >
                        <TbBrandLeetcode size={24} />
                    </motion.div>
                </a>
            </motion.div>

            <div className={styles.contentWrapper}>
                <motion.span
                    className={styles.accentText}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hello, I'm
                </motion.span>
                <motion.h1
                    className={styles.mainHeading}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Kanishk Pandey
                </motion.h1>

                <motion.div
                    className={styles.divider}
                    initial={{ width: 0 }}
                    animate={{ width: "120px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                ></motion.div>

                <motion.div
                    className={styles.subHeadingWrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <RotatingText className={styles.RotatingText} texts={rotatingPhrases} />
                </motion.div>

                <motion.div
                    className={styles.ctaContainer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.a
                        href="#"
                        className={styles.ctaButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleViewProjects}
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#"
                        className={`${styles.ctaButton} ${styles.secondaryButton}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleContactMe}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                onClick={() => selectFile("about")} // Optional: make scroll indicator open About tab
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>About Me</span>
            </motion.div>
        </div>
    );
};

export default Home;