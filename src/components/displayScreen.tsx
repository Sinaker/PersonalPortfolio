
import styles from "./displayScreen.module.css";

export default function DisplayScreen({ className }: { className?: string }) {
    return (
        <div className={`${styles.displayScreen} ${className}`}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to My Portfolio</h1>
                <p className={styles.description}>
                    Explore my projects, skills, and experience creatively displayed in a VS Code-inspired layout.
                </p>
                <div className={styles.animationContainer}>
                    {/* Example animation */}
                    <div className={styles.animationBox}></div>
                </div>
            </div>
        </div>
    );
}