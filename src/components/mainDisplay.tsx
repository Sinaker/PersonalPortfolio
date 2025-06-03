import { useState, useEffect } from "react";
import styles from "./mainDisplay.module.css";
import TabBar from "../components/tabBar";
import { useStore } from "../store/useStore";

interface MainDisplayProps {
    className?: string;
}

// Content sections
const AboutContent = () => (
    <div className={styles.contentSection}>
        <div className={styles.welcomeHeader}>
            <h1>Kanishk Pandey</h1>
            <p className={styles.subtitle}>Frontend Developer & UI Designer</p>
        </div>

        <div className={styles.codeComment}>// Welcome to my interactive portfolio</div>

        <div className={styles.codeLine}>
            <span className={styles.keyword}>const</span>
            <span className={styles.variable}>developer</span> = {'{'}
        </div>

        <div className={styles.codeBlock}>
            <div><span className={styles.property}>name:</span> <span className={styles.string}>"Kanishk Pandey"</span>,</div>
            <div><span className={styles.property}>title:</span> <span className={styles.string}>"Frontend Developer"</span>,</div>
            <div><span className={styles.property}>location:</span> <span className={styles.string}>"India"</span>,</div>
            <div><span className={styles.property}>interests:</span> [<span className={styles.string}>"Web Development"</span>, <span className={styles.string}>"UI/UX"</span>, <span className={styles.string}>"Creative Coding"</span>],</div>
            <div className={styles.aboutFunction}>
                <span className={styles.property}>getIntro:</span> <span className={styles.keyword}>function</span>() {'{'}
                <div className={styles.functionBody}>
                    <span className={styles.keyword}>return</span> <span className={styles.string}>"Hello! I'm a passionate developer focused on creating beautiful and functional web experiences."</span>;
                </div>
                {'}'}
            </div>
        </div>

        <div className={styles.codeLine}>{'}'};</div>

        <div className={styles.terminalSection}>
            <div className={styles.terminalHeader}>TERMINAL</div>
            <div className={styles.terminal}>
                <div className={styles.terminalLine}>
                    <span className={styles.prompt}>&gt; </span>
                    <span className={styles.command}>developer.getIntro()</span>
                </div>
                <div className={styles.terminalOutput}>
                    "Hello! I'm a passionate developer focused on creating beautiful and functional web experiences."
                </div>
                <div className={styles.cursor}>|</div>
            </div>
        </div>
    </div>
);

export default function MainDisplay({ className }: MainDisplayProps) {
    const [animateContent, setAnimateContent] = useState(false);
    const { tabs } = useStore();

    // Find the active tab ID to determine which content to show
    const activeTabId = tabs.find(tab => tab.active)?.id;

    useEffect(() => {
        // Start animation after component mounts
        setAnimateContent(true);
    }, []);

    return (
        <div className={`${styles.mainDisplay} ${className || ""}`}>
            <TabBar />
            <div className={styles.editorContainer}>
                <div className={`${styles.editorContent} ${animateContent ? styles.animate : ""}`}>
                    {/* Conditionally render content based on active tab */}
                    {activeTabId === "about" && <AboutContent />}
                    {/* Add other content sections based on active tab */}
                </div>
            </div>
        </div>
    );
}