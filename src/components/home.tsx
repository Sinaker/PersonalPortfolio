import React from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.css';
import MatrixBackground from "./HomeScene/MatrixBackground.tsx"
import RubiksCubeScene from './HomeScene/RubixCube.tsx';

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            {/* Matrix rain background */}
            <MatrixBackground />

            {/* Main content with fancy title */}
            <div className={styles.contentOverlay}>
                <motion.div
                    className={styles.titleContainer}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    <h1 className={styles.title}>Kanishk Pandey</h1>
                    <h2 className={styles.subtitle}>Frontend Developer & Creative Coder</h2>
                </motion.div>

                {/* 3D Rubik's Cube */}
                <div className={styles.cubeContainer}>
                    <RubiksCubeScene />
                </div>
            </div>
        </div>
    );
}
