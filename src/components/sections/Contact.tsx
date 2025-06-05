import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.contactForm}>
                <h2>Get In Touch</h2>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={6}></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        Send Message
                    </button>
                </form>
                <div className={styles.contactInfo}>
                    <p>📧 kanishk@example.com</p>
                    <p>🔗 linkedin.com/in/kanishkpandey</p>
                    <p>🐙 github.com/kanishkpandey</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;