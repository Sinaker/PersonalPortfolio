import React from 'react';
import { useStore } from '../store/useStore';
import TabBar from './tabBar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import styles from './MainDisplay.module.css';

const MainDisplay: React.FC = () => {
    const { files } = useStore();
    const activeFile = files.find(file => file.isActive);

    const renderFileContent = () => {
        switch (activeFile?.id) {
            case 'home':
            default:
                return <Home />;
            case 'about':
                return <About />;
            case 'skills':
                return <Skills />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
        }
    };

    return (
        <div className={styles.mainDisplay}>
            <TabBar />
            <div className={styles.contentArea}>
                {renderFileContent()}
            </div>
        </div>
    );
};

export default MainDisplay;