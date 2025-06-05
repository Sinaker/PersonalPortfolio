import React, { ReactNode } from 'react';
import styles from './ContentContainer.module.css';

interface ContentContainerProps {
    children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
    return (
        <div className={styles.contentContainer}>
            {children}
        </div>
    );
};

export default ContentContainer;