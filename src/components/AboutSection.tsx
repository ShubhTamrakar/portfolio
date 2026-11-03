import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    tags: ['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    tags: ['React', 'Vite', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    category: 'Databases & Backend',
    tags: ['Firebase Firestore', 'Firebase Realtime DB', 'Firebase Auth'],
  },
  {
    category: 'Tools & Platforms',
    tags: ['Git', 'GitHub', 'VS Code', 'Firebase', 'Raspberry Pi'],
  },
  {
    category: 'Core Concepts',
    tags: ['OOP', 'Data Structures', 'Responsive Web Design', 'Problem Solving', 'AI Agents'],
  },
];

const stats = [
  { number: '4+', label: 'Projects Built' },
  { number: '2x', label: 'Grand Finalist' },
  { number: '4', label: 'IBM Certifications' },
  { number: '2024', label: 'Year Started CS' },
];

function FadeUpBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <FadeUpBlock>
            <p className="section-label">
              <span className="section-number">01</span> Who I Am
            </p>
            <h2 className="section-title">
              Code. Build. <span className="dim">Iterate.</span>
            </h2>
          </FadeUpBlock>
        </div>

        <div className="about-grid">
          {/* Left — Text + Stats */}
          <FadeUpBlock delay={0.1}>
            <p className="about-text">
              I'm a <strong>B.Tech Computer Science (AI) student</strong> at PSIT Kanpur, 
              deeply passionate about building software that solves real problems. 
              I don't just study AI — I build with it.
            </p>
            <br />
            <p className="about-text">
              From wiring a <strong>Raspberry Pi biometric voting machine</strong> to architecting 
              a <strong>real-time chat platform</strong> with Firebase, I gravitate toward 
              projects that feel alive and have genuine impact.
            </p>
            <br />
            <p className="about-text">
              Currently developing an <strong>ML Model Failure Analyzer</strong> to understand 
              why classifiers fail — because debugging intelligence is the most interesting 
              problem in software today.
            </p>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeUpBlock>

          {/* Right — Skills */}
          <FadeUpBlock delay={0.2}>
            <div className="skills-container">
              {skills.map((group) => (
                <div className="skill-category" key={group.category}>
                  <div className="skill-cat-label">{group.category}</div>
                  <div className="skill-tags">
                    {group.tags.map((tag) => (
                      <span className="skill-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeUpBlock>
        </div>
      </div>
    </section>
  );
}
