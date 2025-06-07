import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { IoDocumentTextOutline } from 'react-icons/io5';

const Contact: React.FC = () => {
    const [typedText, setTypedText] = useState("");

    // Contact data with links
    const contactData = {
        resume: {
            value: "/Resume.pdf",
            link: "/Resume.pdf"
        },
        email: {
            value: "kanishkpdev@gmail.com",
            link: "mailto:kanishkpdev@gmail.com"
        },
        github: {
            value: "Sinaker",
            link: "https://github.com/Sinaker"
        },
        linkedin: {
            value: "kanishkkpandey",
            link: "https://linkedin.com/in/kanishkkpandey"
        }
    };

    // Create code snippet text
    const codeSnippet = `{
        email: "${contactData.email.value}",
        github: "${contactData.github.value}",
        linkedin: "${contactData.linkedin.value}"
        resume: "${contactData.resume.value}",
};`;

    // Typing animation effect
    useEffect(() => {
        let currentText = "";
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < codeSnippet.length) {
                currentText += codeSnippet[currentIndex];
                setTypedText(currentText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30);

        return () => clearInterval(typingInterval);
    }, []);

    // Parse and highlight code with interactive links
    const renderCodeWithInteractiveLinks = () => {
        // First pass: basic syntax highlighting
        let highlightedCode = typedText
            .replace(/\{/g, '<span class="bracket">{</span>')
            .replace(/\}/g, '<span class="bracket">}</span>')
            .replace(/;/g, '<span class="semicolon">;</span>')
            .replace(/"([^"]+)":/g, '<span class="property">"$1"</span>:');

        // Second pass: replace values with clickable links
        Object.entries(contactData).forEach(([_, data]) => {
            const { value, link } = data;
            const valuePattern = new RegExp(`(: )"(${value})"`, 'g');
            highlightedCode = highlightedCode.replace(
                valuePattern,
                `$1<a href="${link}" class="valueLink" target="_blank" rel="noopener noreferrer">"${value}"</a>`
            );
        });

        return { __html: highlightedCode };
    };

    return (
        <div className={styles.contentContainer}>
            <div className={styles.contactWrapper}>
                {/* Left Section - Code Snippet */}
                <div className={styles.codeSection}>
                    <h2 className={styles.sectionTitle}>
                        Reach Out <span className={styles.accentText}>Via Socials</span>
                    </h2>

                    <div className={styles.codeSnippet}>
                        <div className={styles.lineNumbers}>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                        </div>
                        <pre className={styles.code}>
                            <code>
                                <span className={styles.codeVariable}>.socials</span>
                                <div dangerouslySetInnerHTML={renderCodeWithInteractiveLinks()} />
                            </code>
                        </pre>
                        <div className={styles.codePulse}></div>
                    </div>

                    <div className={styles.socialLinks}>
                        <motion.a
                            href={contactData.resume.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.websiteLink}
                        >
                            <IoDocumentTextOutline size={20} />
                            Resume
                        </motion.a>
                        <motion.a
                            href={contactData.email.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.emailLink}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            Email
                        </motion.a>
                        <motion.a
                            href={contactData.github.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.githubLink}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            GitHub
                        </motion.a>
                        <motion.a
                            href={contactData.linkedin.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.linkedinLink}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            LinkedIn
                        </motion.a>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Right Section - Contact Form */}
                <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>
                        Or Fill Out <span className={styles.accentText}>This Form</span>
                    </h2>

                    <form className={styles.contactForm}>
                        <div className={styles.formField}>
                            <label htmlFor="name">NAME</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor="email">EMAIL</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor="subject">SUBJECT</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                            />
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor="message">MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.submitButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            SUBMIT
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;