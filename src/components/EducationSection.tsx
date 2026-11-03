import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    year: '2024',
    yearEnd: '2028 (Expected)',
    title: 'Bachelor of Technology',
    subtitle: 'Computer Science & Engineering (Artificial Intelligence)',
    org: 'Pranveer Singh Institute of Technology (PSIT)',
    details: 'Specialization in Artificial Intelligence. Building foundational expertise in algorithms, data structures, and machine learning while applying knowledge through real-world projects.',
  },
  {
    year: '2022',
    yearEnd: '2024',
    title: 'Schooling (ICSE & ISC)',
    subtitle: 'Science Stream • Class XII & Class X',
    org: 'Christukula Mission Higher Secondary School, Satna, M.P.',
    details: 'Completed ISC Class XII (Mar. 2024) and ICSE Class X (Apr. 2022). Developed a strong foundation in mathematics, science, and analytical problem-solving.',
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

// Extract individual timeline item to its own component so hooks rules are respected
function TimelineItem({ item, index }: { item: typeof education[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="timeline-year">
        <span className="year-accent">{item.year}</span>
        {item.yearEnd}
      </div>
      <div className="timeline-content">
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-org">{item.org}</p>
        <p className="timeline-desc" style={{ marginBottom: '0.5rem', color: 'var(--color-text)', fontWeight: 500 }}>
          {item.subtitle}
        </p>
        <p className="timeline-desc">{item.details}</p>
      </div>
    </motion.div>
  );
}

export function EducationSection() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <FadeUpBlock>
            <p className="section-label">
              <span className="section-number">03</span> Background
            </p>
            <h2 className="section-title">
              Education & <span className="dim">Formation</span>
            </h2>
          </FadeUpBlock>
        </div>

        <div className="timeline">
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
