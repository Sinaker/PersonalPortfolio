import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    githubUrl: string;
    liveUrl: string;
}

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const projectsData: Project[] = [
        {
            id: 'vscode-portfolio',
            title: 'VSCode Portfolio',
            description: 'A creative portfolio website mimicking VSCode interface with dark theme and interactive elements.',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop',
            tech: ['React', 'TypeScript', 'Framer Motion'],
            githubUrl: 'https://github.com/username/vscode-portfolio',
            liveUrl: 'https://your-portfolio-site.com'
        },
        {
            id: 'ecommerce-platform',
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with secure payment integration, admin dashboard, and inventory management.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop',
            tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            githubUrl: 'https://github.com/username/ecommerce-platform',
            liveUrl: 'https://your-ecommerce-site.com'
        },
        {
            id: 'task-management',
            title: 'Task Management App',
            description: 'Collaborative task management with real-time updates, user roles, and progress tracking functionality.',
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=500&auto=format&fit=crop',
            tech: ['Vue.js', 'Socket.io', 'PostgreSQL'],
            githubUrl: 'https://github.com/username/task-management',
            liveUrl: 'https://your-task-app.com'
        },
        {
            id: 'weather-app',
            title: 'Weather Dashboard',
            description: 'Interactive weather application with forecasts, location-based services, and customizable alerts.',
            image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=500&auto=format&fit=crop',
            tech: ['React', 'Redux', 'Weather API'],
            githubUrl: 'https://github.com/username/weather-app',
            liveUrl: 'https://your-weather-app.com'
        },
        {
            id: 'ai-image-generator',
            title: 'AI Image Generator',
            description: 'Creative tool that leverages machine learning to generate unique artwork based on text prompts and style preferences.',
            image: 'https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?q=80&w=500&auto=format&fit=crop',
            tech: ['Python', 'TensorFlow', 'React', 'Flask'],
            githubUrl: 'https://github.com/username/ai-image-generator',
            liveUrl: 'https://your-ai-generator.com'
        },
        {
            id: 'fitness-tracker',
            title: 'Fitness Tracker',
            description: 'Mobile application for tracking workouts, nutrition, and personal fitness goals with data visualization and progress reports.',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop',
            tech: ['React Native', 'Firebase', 'Redux', 'D3.js'],
            githubUrl: 'https://github.com/username/fitness-tracker',
            liveUrl: 'https://your-fitness-app.com'
        }
    ];

    // Get all unique tech tags
    const allTechTags = Array.from(
        new Set(projectsData.flatMap(project => project.tech))
    ).sort();

    // Filter projects based on selected tech
    const filteredProjects = activeFilter
        ? projectsData.filter(project => project.tech.includes(activeFilter))
        : projectsData;

    return (
        <div className={styles.contentContainer}>
            <div className={styles.backgroundAccent}></div>

            <div className={styles.projectsHeader}>
                <h2 className={styles.sectionTitle}>
                    My <span className={styles.accentText}>Projects</span>
                </h2>
                <p className={styles.sectionDescription}>
                    A selection of my recent work, ranging from web applications to UI/UX designs.
                    Each project showcases different skills and technologies in my stack.
                </p>
            </div>

            <div className={styles.filterContainer}>
                <button
                    className={`${styles.filterButton} ${activeFilter === null ? styles.active : ''}`}
                    onClick={() => setActiveFilter(null)}
                >
                    All
                </button>
                {allTechTags.map(tech => (
                    <button
                        key={tech}
                        className={`${styles.filterButton} ${activeFilter === tech ? styles.active : ''}`}
                        onClick={() => setActiveFilter(tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                <motion.div
                    className={styles.masonryGrid}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.figure
                            key={project.id}
                            className={styles.projectCard}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.4,
                                    delay: index * 0.1 // Stagger the animations
                                }
                            }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <div className={styles.projectImageContainer}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                />
                            </div>

                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>

                                <div className={styles.techStack}>
                                    {project.tech.map(tech => (
                                        <span key={tech} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.projectLinks}>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.projectLink}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        Code
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.projectLink} ${styles.liveLink}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                            <div
                                className={`${styles.projectCardAccent} ${hoveredProject === project.id ? styles.hovered : ''}`}
                            ></div>
                        </motion.figure>
                    ))}
                </motion.div>
            </AnimatePresence>

            <motion.div
                className={styles.moreProjectsContainer}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <a
                    href="https://github.com/Sinaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.moreProjectsLink}
                >
                    View More Projects on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </motion.div>
        </div>
    );
};

export default Projects;