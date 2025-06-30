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
        tech: ['React', 'TypeScript', 'Framer Motion', 'Cloudflare Workers'],
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
        githubUrl: 'https://github.com/Sinaker/cureGPT',
        liveUrl: ''
    },
    {
        id: 'darshan',
        title: 'Darshan: The Wikipedia of Indian Heritage',
        description: 'India\'s cultural heritage lacked unified digital representation. I created an interactive platform using EJS, Node.js and MongoDB that centralizes information about historical sites with geolocation-based discovery. The implementation includes optimized media loading resulting in first place recognition at WebWonders 2024 among 20+ competing teams.',
        image: '/Darshan.png',
        tech: ['EJS', 'Node.js', 'MongoDB', 'Geolocation', 'Azure', 'Github Actions', 'CI/CD', 'Authentication'],
        githubUrl: 'https://github.com/Sinaker/Heritage-WebWonders',
        liveUrl: 'https://darshan.azurewebsites.net'
    },
    {
        id: 'auto-checker',
        title: 'Automatic Answer Sheet Checking System',
        description: 'Manual checking of exam answer sheets was time-consuming and error-prone. To automate this, I built a prototype that uses PaddleOCR and Microsoft\'s TrOCR to extract handwritten text from scanned sheets. Users can upload images and define expected key points. The system then summarizes the detected text and evaluates it against expectations using cosine similarity, offering a fast and consistent scoring mechanism. A clean demo interface ensures easy usability for educators and institutions.',
        image: '/AutoChecker.jpg',
        tech: ['Tensorflow', 'LLM', 'Text Summarization'],
        githubUrl: '',
        liveUrl: ''
    },
    {
        id: 'helperbuddy',
        title: 'Helperbuddy - Local Business Empowerment Platform',
        description: 'As part of Google Winter of Code (GWOC), our team developed "Helperbuddy," a startup initiative that connects cleaning service providers with offices and homes. The platform focused on secure and scalable tech from the ground up, using Next.js, drizzle-orm, and Better Auth for seamless authentication. Although we didn\'t win, the project gave us valuable exposure to modern web architecture, secure backend practices, and real-world startup integration challenges.',
        image: '/helperbuddy.png',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Authentication'],
        githubUrl: '',
        liveUrl: 'helperbuddy.vercel.app'
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
                    ['MongoDB', 'MongoDB Atlas',
                        'SQLite',
                        'PostgreSQL',
                        'MySQL',
                        'Query Optimization'].includes(tech)
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
                    ['Scikit Learn', 'NLP', 'Random Forest', 'Chat Interface', 'Tensorflow', 'MLP', 'CNN', 'RNN', 'LLM'].includes(tech)
                )
            ),
        },
    ];
};