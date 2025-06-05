import React from 'react';
import ProfileCard from '../../reactbits/Components/ProfileCard/ProfileCard';
import RotatingText from '../../reactbits/TextAnimations/RotatingText/RotatingText';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.textSection}>
                <div className={styles.rotatingTextWrapper}>
                    <span className={styles.staticIntro}>Hi, I'm Kanishk, </span>
                    <RotatingText
                        texts={[
                            "Developer",
                            "Designer",
                            "Debugger",
                            "Student",
                        ]}
                        mainClassName={styles.rotatingTextMain}
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName={styles.splitLevel}
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div>
                <p className={styles.subHeading}>
                    Writing bugs faster than you can say 'console.log'
                </p>
            </div>
            <div className={styles.profileSection}>
                <ProfileCard
                    avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                    miniAvatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    name="Kanishk Pandey"
                    title="Full Stack Developer"
                    handle="kanishkkpandey"
                    status="Available for work"
                    contactText="Contact"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => {
                        console.log('Contact clicked');
                    }}
                />
            </div>
        </div>
    );
};

export default Home;