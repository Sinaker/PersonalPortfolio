import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Skills.module.css';

// Types
interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    skills: string[];
    githubUrl: string;
    liveUrl: string;
}

interface SkillCategory {
    id: string;
    title: string;
    skills: string[];
    projects: Project[];
}

// Project Data
const projectsData: Project[] = [
    {
        id: 'ecommerce-dashboard',
        title: 'E-Commerce Dashboard',
        description: 'A real-time analytics dashboard for online stores with sales tracking, inventory management, and customer insights. Built with React, Node.js, and MongoDB.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
        skills: ['React.js', 'Node.js', 'MongoDB', 'RESTful APIs'],
        githubUrl: 'https://github.com/yourusername/ecommerce-dashboard',
        liveUrl: 'https://dashboard-demo.yourdomain.com',
    },
    {
        id: 'travel-app',
        title: 'Travel Planner App',
        description: 'A mobile-first web application for planning trips with itinerary creation, budget tracking, and location bookmarking. Uses Next.js and PostgreSQL.',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
        skills: ['Next.js', 'TypeScript', 'PostgreSQL'],
        githubUrl: 'https://github.com/yourusername/travel-planner',
        liveUrl: 'https://travelplanner.yourdomain.com',
    },
    {
        id: 'content-cms',
        title: 'Content Management System',
        description: 'A custom CMS built for content creators with markdown support, media management, and automated publishing workflows. Powered by Node.js and PostgreSQL.',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
        githubUrl: 'https://github.com/yourusername/content-cms',
        liveUrl: 'https://cms-demo.yourdomain.com',
    },
    {
        id: 'portfolio',
        title: 'Developer Portfolio',
        description: 'A responsive developer portfolio with VS Code-inspired design, featuring smooth animations and a dark theme. Built with React and TypeScript.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
        skills: ['React.js', 'TypeScript', 'HTML/CSS'],
        githubUrl: 'https://github.com/yourusername/portfolio',
        liveUrl: 'https://yourdomain.com',
    },
    {
        id: 'ml-sentiment-analyzer',
        title: 'Sentiment Analysis Tool',
        description: 'An NLP-powered sentiment analysis tool that processes customer reviews and feedback to extract insights and emotional trends.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
        skills: ['Python', 'TensorFlow', 'Natural Language Processing'],
        githubUrl: 'https://github.com/yourusername/sentiment-analyzer',
        liveUrl: 'https://analyzer-demo.yourdomain.com',
    },
    {
        id: 'kubernetes-deployment',
        title: 'Microservices Deployment',
        description: 'A comprehensive microservices architecture deployed with Kubernetes, featuring automated scaling, monitoring, and fault tolerance.',
        image: 'https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=600&auto=format&fit=crop',
        skills: ['Docker', 'Kubernetes', 'CI/CD pipelines'],
        githubUrl: 'https://github.com/yourusername/kubernetes-deployment',
        liveUrl: 'https://microservices-demo.yourdomain.com',
    },
];

// Updated Skills Data
const skillsData: SkillCategory[] = [
    {
        id: 'languages',
        title: 'Programming Languages',
        skills: [
            'JavaScript/TypeScript',
            'Python',
            'C/C++',
            'Java',
            'SQL',
            'HTML/CSS'
        ],
        projects: projectsData.filter(project =>
            project.skills.some(skill =>
                ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'Java', 'SQL', 'HTML/CSS'].includes(skill)
            )
        ),
    },
    {
        id: 'frontend',
        title: 'Web Development',
        skills: [
            'React.js',
            'Next.js',
            'Node.js',
            'Express',
            'RESTful APIs',
            'Responsive Design'
        ],
        projects: projectsData.filter(project =>
            project.skills.some(skill =>
                ['React.js', 'Next.js', 'Node.js', 'Express', 'RESTful APIs', 'HTML/CSS'].includes(skill)
            )
        ),
    },
    {
        id: 'devops',
        title: 'Cloud & DevOps',
        skills: [
            'Docker',
            'Kubernetes',
            'CI/CD pipelines',
            'Cloudflare Workers',
            'Version Control (Git)'
        ],
        projects: projectsData.filter(project =>
            project.skills.some(skill =>
                ['Docker', 'Kubernetes', 'CI/CD pipelines', 'Cloudflare Workers'].includes(skill)
            )
        ),
    },
    {
        id: 'databases',
        title: 'Databases',
        skills: [
            'MongoDB Atlas',
            'SQLite',
            'PostgreSQL',
            'MYSQL',
            'Query Optimization'
        ],
        projects: projectsData.filter(project =>
            project.skills.some(skill =>
                ['MongoDB', 'SQLite', 'PostgreSQL'].includes(skill)
            )
        ),
    },
    {
        id: 'aiml',
        title: 'AI & Machine Learning',
        skills: [
            'TensorFlow',
            'Natural Language Processing',
            'Classification Models',
            'Data Analysis',
            'Predictive Modeling'
        ],
        projects: projectsData.filter(project =>
            project.skills.some(skill =>
                ['TensorFlow', 'Natural Language Processing', 'Classification Models'].includes(skill)
            )
        ),
    },
];

// Project Modal Component
const ProjectModal: React.FC<{ project: Project, onClose: () => void }> = ({ project, onClose }) => {
    // Component code remains the same
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
                        {project.skills.map(skill => (
                            <span key={skill} className={styles.skillTag}>{skill}</span>
                        ))}
                    </div>

                    <div className={styles.modalActions}>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.actionButton} ${styles.githubButton}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            View GitHub
                        </a>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.actionButton} ${styles.liveButton}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            View Website
                        </a>
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
    // Component code remains the same
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
                                        {project.skills.map(skill => (
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
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.actionButton} ${styles.liveButton}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            See It Live
                                        </a>
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
    // Component code remains the same
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