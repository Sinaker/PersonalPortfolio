import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Skills.module.css';
import { Project, SkillCategory, generateSkillsData } from '../../data/projectsData';

// Get skills data from shared source
const skillsData: SkillCategory[] = generateSkillsData();

// Project Modal Component
const ProjectModal: React.FC<{ project: Project, onClose: () => void }> = ({ project, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <motion.div
                className={styles.modalContent}
                onClick={e => e.stopPropagation()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
            >
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <div className={styles.modalImage}>
                    <img src={project.image} alt={project.title} />
                </div>

                <div className={styles.modalDetails}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className={styles.projectSkills}>
                        {project.tech.map(skill => (
                            <span key={skill} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>

                    <div className={styles.modalActions}>
                        {project.githubUrl && <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.actionButton} ${styles.githubButton}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            View GitHub
                        </a>}
                        {project.githubUrl &&
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.actionButton} ${styles.liveButton}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                View Website
                            </a>
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Projects Dialog Component
const ProjectsDialog: React.FC<{
    isOpen: boolean,
    category: SkillCategory | null,
    onClose: () => void,
    onProjectClick: (project: Project) => void
}> = ({ isOpen, category, onClose, onProjectClick }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleDialogClose = () => {
        onClose();
    };

    if (!category) return null;

    return (
        <dialog
            ref={dialogRef}
            className={styles.projectsDialog}
            onClose={handleDialogClose}
        >
            <div className={styles.dialogHeader}>
                <h3>{category.title} Projects</h3>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close dialog"
                >
                    ×
                </button>
            </div>

            <div className={styles.dialogContent}>
                {category.projects.length > 0 ? (
                    <div className={styles.dialogProjectsGrid}>
                        {category.projects.map(project => (
                            <div key={project.id} className={styles.dialogProjectCard}>
                                <div className={styles.dialogProjectImage}>
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className={styles.dialogProjectInfo}>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>

                                    <div className={styles.projectSkills}>
                                        {project.tech.map(skill => (
                                            <span key={skill} className={styles.skillTag}>{skill}</span>
                                        ))}
                                    </div>

                                    <div className={styles.projectActions}>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.actionButton} ${styles.githubButton}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                            View Code
                                        </a>
                                        {project.liveUrl && <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.actionButton} ${styles.liveButton}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            See It Live
                                        </a>}
                                        <button
                                            className={`${styles.actionButton} ${styles.detailsButton}`}
                                            onClick={() => {
                                                onProjectClick(project);
                                                onClose();
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                                            How It Works
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.noProjects}>No projects found for this category.</p>
                )}
            </div>
        </dialog>
    );
};

// Skill Section Component
const SkillSection: React.FC<{
    category: SkillCategory,
    onViewProjects: (category: SkillCategory) => void
}> = ({ category, onViewProjects }) => {
    return (
        <section className={styles.skillCategory}>
            <h3>{category.title}</h3>
            <ul>
                {category.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>

            {category.projects.length > 0 && (
                <motion.button
                    className={styles.viewProjectsButton}
                    onClick={() => onViewProjects(category)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
                        <circle cx="12" cy="13" r="2"></circle>
                    </svg>
                    View Related Projects ({category.projects.length})
                </motion.button>
            )}
        </section>
    );
};

// Main Skills Component
const Skills: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleViewProjects = (category: SkillCategory) => {
        setSelectedCategory(category);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className={styles.contentContainer}>
            <motion.h2
                className={styles.pageTitle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Skills & Projects
            </motion.h2>

            <motion.p
                className={styles.pageIntro}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                With over 3 years of experience, I've developed expertise in various technologies
                and successfully delivered multiple projects. Here's what I bring to the table:
            </motion.p>

            <div className={styles.skillsGrid}>
                {skillsData.map(category => (
                    <SkillSection
                        key={category.id}
                        category={category}
                        onViewProjects={handleViewProjects}
                    />
                ))}
            </div>

            {/* Projects Dialog for Skill Categories */}
            <ProjectsDialog
                isOpen={isDialogOpen}
                category={selectedCategory}
                onClose={handleCloseDialog}
                onProjectClick={setSelectedProject}
            />

            {/* Detailed Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Skills;