import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'BioVote',
    subtitle: 'Air-Gapped Biometric Voting System with VVPAT Audit Trail',
    description:
      'A fully air-gapped, Raspberry Pi-based voting machine prototype designed for tamper-proof elections with zero network connectivity. Authenticates voters through on-device fingerprint scanning with Aadhaar-based verification, displays voter details for identity confirmation, prevents duplicate voting, securely stores votes in an isolated local database, and prints an instant physical VVPAT slip for verifiable auditing.',
    tech: ['Raspberry Pi', 'Python', 'Fingerprint Sensor', 'VVPAT', 'Air-Gapped'],
    github: 'https://github.com/ShubhTamrakar/BIO-VOTE',
    status: 'live',
    featured: true,
  },
  {
    id: '02',
    title: 'NovaTalk',
    subtitle: 'Real-Time Social Communication Platform',
    description:
      'A real-time chat platform with anonymous stranger matching, friend networking, communities, and live messaging. Includes typing indicators, read receipts, presence tracking, voice notes & image sharing. Features an admin Mission Control panel with user management, report moderation, analytics, and role-based access control.',
    tech: ['React', 'Vite', 'Firebase Auth', 'Firestore', 'Realtime DB'],
    github: 'https://github.com/ShubhTamrakar/NovaTalk',
    status: 'live',
    featured: false,
  },
  {
    id: '03',
    title: 'ML Model Failure Analyzer',
    subtitle: 'Machine Learning Diagnostic System',
    description:
      'A machine learning diagnostic system to analyze model predictions and identify patterns behind incorrect classifications. Implements data splitting, baseline classifier training, and prediction generation using Scikit-learn, generating class predictions and confidence scores to investigate high-confidence misclassifications and prepare structured error datasets.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    github: '',
    status: 'wip',
    featured: false,
  },
  {
    id: '04',
    title: 'ETBLM',
    subtitle: 'Responsive Floral E-Commerce Platform',
    description:
      'A responsive floral e-commerce website with modern and intuitive UI. Features product pages, category browsing, and interactive navigation with focus on clean UI, performance optimization, and maintainable code structure.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ShubhTamrakar/ETBLM',
    status: 'live',
    featured: false,
  },
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

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={`project-card${project.featured ? ' featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {project.featured ? (
        <div className="featured-inner">
          <div>
            <div className="project-number">{project.id} / Featured</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              What it does
            </p>
            <p className="project-desc" style={{ fontSize: '0.85rem', marginBottom: '2rem' }}>
              {project.subtitle}
            </p>
            <div className="project-tech">
              {project.tech.map(t => <span className="tech-badge" key={t}>{t}</span>)}
            </div>
            <div className="project-footer">
              <span className="project-status">
                <span className={`status-dot${project.status === 'wip' ? ' inactive' : ''}`} />
                {project.status === 'live' ? 'Shipped' : 'In Progress'}
              </span>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="project-number">{project.id}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-tech">
            {project.tech.map(t => <span className="tech-badge" key={t}>{t}</span>)}
          </div>
          <div className="project-footer">
            <span className="project-status">
              <span className={`status-dot${project.status === 'wip' ? ' inactive' : ''}`} />
              {project.status === 'live' ? 'Shipped' : 'In Progress'}
            </span>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ) : (
              <span className="project-link" style={{ cursor: 'default' }}>
                {project.status === 'wip' ? 'In Development' : 'Private'}
              </span>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <FadeUpBlock>
            <p className="section-label">
              <span className="section-number">02</span> Selected Work
            </p>
            <h2 className="section-title">
              Things I've <span className="dim">Built</span>
            </h2>
          </FadeUpBlock>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
