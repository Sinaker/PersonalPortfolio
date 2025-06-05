import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from '../../reactbits/TextAnimations/RotatingText/RotatingText';
import Squares from '../../reactbits/Backgrounds/Squares/Squares';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const rotatingPhrases = [
        "Turning coffee into code since 2018.",
        "Full Stack Developer — Half Stack Sleep.",
        "Crafting user experiences that don't crash... usually."
    ];

    return (
        <div className={styles.homeContainer}>
            <div className={styles.backgroundWrapper}>
                <Squares
                    direction="diagonal"
                    speed={0.5}
                    borderColor="#444444"
                    squareSize={40}
                    hoverFillColor="orange"
                />
            </div>

            <div className={styles.contentWrapper}>
                <motion.h1
                    className={styles.mainHeading}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Kanishk Pandey
                </motion.h1>

                <motion.div
                    className={styles.subHeadingWrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <RotatingText className={styles.RotatingText} texts={rotatingPhrases} />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;