import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";
import {
  SiReact, SiTypescript, SiNodedotjs,
  SiExpress, SiMongodb, SiPython, SiDocker,
  SiGit,
  SiTensorflow, SiPostgresql, SiKubernetes,
  SiCplusplus,
  SiHono,
  SiCloudflareworkers
} from 'react-icons/si';
import { useStore } from '../../store/useStore'; // Import the store


const About: React.FC = () => {
  const { selectFile } = useStore();

  const handleContactMe = (e: React.MouseEvent) => {
    e.preventDefault();
    selectFile("contact");
  };
  // Tech carousel data
  const techStacks = [
    [
      { icon: <SiReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiCloudflareworkers />, name: "Cloudflare Workers" },
      { icon: <SiNodedotjs />, name: "Node.js" }
    ],
    [
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiHono />, name: "Hono" }
    ],
    [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <VscAzure />, name: "Azure" },
      { icon: <SiTensorflow />, name: "TensorFlow" },
    ],
    [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <FaJava />, name: "Java" }
    ]
  ];

  const [currentStackIndex, setCurrentStackIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStackIndex((prevIndex) =>
        prevIndex === techStacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [techStacks.length]);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.backgroundAccent}></div>

      <div className={styles.aboutWrapper}>
        {/* Left Column: Main Content */}
        <motion.div
          className={styles.mainContent}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            About <span className={styles.accentText}>Me</span>
          </h2>

          <div className={styles.contentBlock}>
            <p>
              I'm <span className={styles.highlight}>Kanishk Pandey</span>, a Computer Science undergraduate at SVNIT with a passion for building impactful solutions at the intersection of web technologies and artificial intelligence. With a 9.05/10 CGPA and ranked in the top 5% of my department. I specialize in full-stack development, and AI implementation. With intermediate knowledge in cloud infrastructure .My goal is to create innovative applications that enhance user experiences and solve real-world problems.
            </p>

            <h3 className={styles.subheading}>
              <span className={styles.accentIcon}>✦</span> Skills and Achievements
            </h3>
            <div className={styles.skillsList}>
              <li>My technical journey spans <span className={styles.highlight}>full-stack development</span>, <span className={styles.highlight}>AI implementation</span>, and <span className={styles.highlight}>cloud infrastructure</span> engineering.</li>

              <li>Led development of an award-winning cultural heritage platform <span className={styles.highlight}>"Darshan"</span> (WebWonders 2024 winner).</li>

              <li>Created a faculty consultancy management system that reduced administrative overhead by <span className={styles.highlight}>25%</span>.</li>

              <li>Built an AI disease classifier achieving <span className={styles.highlight}>85% accuracy</span> in symptom-based prediction.</li>

              <li>I prefer using current technologies over textbook solutions, making me adaptable and eager to learn new skills.</li>
            </div>

            <h3 className={styles.subheading}>
              <span className={styles.accentIcon}>✦</span> Beyond Coding
            </h3>
            <p>
              When I'm not crafting code, you'll find me playing table tennis, a bit of piano, or watching an in depth youtube video on some random obscure topic. At least I do something except coding.
            </p>

            <div className={styles.callToAction}>
              <div className={styles.ctaGlow}></div>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Let's connect and build something amazing together!
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Card */}
        <motion.div
          className={styles.profileCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.photoContainer}>
            <img
              src="https://avatars.githubusercontent.com/u/135948593?v=4"
              alt="Kanishk Pandey"
              className={styles.profilePhoto}
            />
            <div className={styles.photoOutline}></div>
          </div>
          <h3 className={styles.profileName}>Kanishk Pandey</h3>
          <p className={styles.profileTagline}>
            <span className={styles.tagHighlight}>Web Developer</span> | Tech Enthusiast
          </p>

          <div className={styles.profileDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📍</span>
              <span>Surat, Gujarat</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>💼</span>
              <span>Student</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>🎓</span>
              <span>BTech in Computer Science</span>
            </div>
          </div>

          {/* Tech Stack Carousel */}
          <div className={styles.techCarousel}>
            <div className={styles.carouselHeader}>
              <div className={styles.controls}>
                <span className={styles.controlDot} style={{ backgroundColor: "#FF4565" }}></span>
                <span className={styles.controlDot} style={{ backgroundColor: "#ffbd44" }}></span>
                <span className={styles.controlDot} style={{ backgroundColor: "#00ca4e" }}></span>
              </div>
              <span className={styles.filename}>tech-stack.js</span>
            </div>

            <div className={styles.carouselContent}>
              <motion.div
                className={styles.techStackGrid}
                key={currentStackIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {techStacks[currentStackIndex].map((tech, index) => (
                  <div key={index} className={styles.techItem}>
                    <div className={styles.techIcon}>{tech.icon}</div>
                    <span className={styles.techName}>{tech.name}</span>
                  </div>
                ))}
              </motion.div>

              <div className={styles.carouselDots}>
                {techStacks.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.carouselDot} ${index === currentStackIndex ? styles.activeDot : ''}`}
                    onClick={() => setCurrentStackIndex(index)}
                    aria-label={`View tech stack ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.span
            className={styles.connectButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactMe}
          >
            Let's Connect
          </motion.span>
        </motion.div>
      </div>
    </div >
  );
};

export default About;