export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    githubUrl: string;
    liveUrl: string;
}

// Consolidated project data that will be used by both components
export const projectsData: Project[] = [
    {
        id: 'vscode-portfolio',
        title: 'VSCode Portfolio',
        description: 'After being trapped in VSCode for like my entire degree, why not just make it? The site features persistent tabs using localStorage, smooth animations with Framer Motion, and responsive design. Built with React, TypeScript, and deployed with Cloudflare Workers, this application took too much time than necessary.',
        image: '/VSCode.png',
        tech: ['React', 'TypeScript', 'Framer Motion', 'Cloudflare Workers', 'Responsive Design'],
        githubUrl: 'https://github.com/Sinaker/PersonalPortfolio',
        liveUrl: 'https://portfolio.kanishkpdev.workers.dev'
    },
    {
        id: 'consultancy-management',
        title: 'Consultancy Project Management System',
        description: 'Faculty at SVNIT struggled with paper-based consultancy contract management, causing delays and poor visibility. I built a full-stack digital workflow system that automated approvals and notifications. The implementation features role-based authentication and scheduled CRON jobs, reducing administrative overhead by 25% and saving 5 hours weekly in manual follow-ups.',
        image: '/Consultancy.png',
        tech: ['React', 'Hono', 'Cloudflare Workers', 'Authentication', 'CRON'],
        githubUrl: 'https://github.com/Sinaker/consultancy-management',
        liveUrl: 'https://consultancy-project.pages.dev'
    },
    {
        id: 'curegpt',
        title: 'CureGPT: AI-Driven Disease Classifier',
        description: 'Access to preliminary medical assessment is limited in many regions. I led a team of 4 to develop an AI system that processes natural language symptom descriptions to predict potential conditions with 85% accuracy. The solution combines Scikit Learn, Random Forest model and a Simple Chat interface to extract medical indicators from unstructured text, making healthcare information more accessible to users without technical or medical expertise.',
        image: '/CureGPT.png',
        tech: ['Python', 'Scikit Learn', 'NLP', 'Random Forest', 'Chat Interface'],
        githubUrl: 'https://github.com/Sinaker/DRISHTI-DPS-FINAL',
        liveUrl: ''
    },
    {
        id: 'darshan',
        title: 'Darshan: The Wikipedia of Indian Heritage',
        description: 'India\'s cultural heritage lacked unified digital representation. I created an interactive platform using EJS, Node.js and MongoDB that centralizes information about historical sites with geolocation-based discovery. The implementation includes optimized media loading resulting in first place recognition at WebWonders 2024 among 20+ competing teams.',
        image: '/Darshan.png',
        tech: ['EJS', 'Node.js', 'MongoDB', 'Geolocation', 'Media Optimization'],
        githubUrl: 'https://github.com/Sinaker/Heritage-WebWonders',
        liveUrl: ''
    }
];

// Skill categories that reference the projects
export interface SkillCategory {
    id: string;
    title: string;
    skills: string[];
    projects: Project[];
}

// Generate skill categories and link them to projects
export const generateSkillsData = (): SkillCategory[] => {
    return [
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
                project.tech.some(tech =>
                    ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java', 'SQL', 'EJS', 'HTML/CSS'].includes(tech)
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
                project.tech.some(tech =>
                    ['React', 'TypeScript', 'Node.js', 'EJS', 'Hono'].includes(tech)
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
                project.tech.some(tech =>
                    ['Cloudflare Workers', 'CRON', 'Media Optimization'].includes(tech)
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
                'MySQL',
                'Query Optimization'
            ],
            projects: projectsData.filter(project =>
                project.tech.some(tech =>
                    ['MongoDB'].includes(tech)
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
                project.tech.some(tech =>
                    ['Scikit Learn', 'NLP', 'Random Forest', 'Chat Interface'].includes(tech)
                )
            ),
        },
    ];
};