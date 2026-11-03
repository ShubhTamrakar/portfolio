import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

interface Achievement {
  id: string;
  badge: string;
  subBadge: string;
  date: string;
  location: string;
  organizer: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  journeyTitle: string;
  milestones: { step: string; title: string; desc: string }[];
}

const achievements: Achievement[] = [
  {
    id: '01',
    badge: 'Grand Finale • 3rd Runner-Up',
    subBadge: 'Top 8 Finalist Teams',
    date: '31 OCT 2026',
    location: 'DELHI, INDIA',
    organizer: 'HackGyanVerse Community × Avaroite',
    title: 'AHGV BuildVerse 2026',
    tagline: 'From Idea → Prototype → Product',
    description:
      'Competed in an industry-focused, multi-phase hackathon centered on Artificial Intelligence, Agentic AI, and Full-Stack Development. Successfully navigated the problem statements and prototype rounds to be shortlisted into the Top 8 teams nationwide, then achieved 3rd Runner-Up (4th Position) in the intense 8-Hour Offline Grand Finale build sprint in Delhi.',
    tags: ['AI & Machine Learning', 'Agentic AI', 'Full-Stack Development', 'Automation', 'Rapid Prototyping'],
    journeyTitle: 'Competition Journey',
    milestones: [
      { step: '01', title: 'Prototype Round', desc: 'Problem statement analysis, PPT & functional working prototype submission.' },
      { step: '02', title: 'Top 8 Finalist Shortlist', desc: 'Selected among top 8 teams out of all nationwide submissions for the Grand Finale.' },
      { step: '03', title: '8-Hour Offline Grand Finale', desc: 'Intense offline build sprint in Delhi; awarded 3rd Runner-Up (4th Position).' },
    ],
  },
  {
    id: '02',
    badge: 'College Event • Grand Finalist',
    subBadge: 'Campus Innovation Showcase',
    date: 'PSIT KANPUR',
    location: 'KANPUR, INDIA',
    organizer: 'Pranveer Singh Institute of Technology',
    title: 'TECHEXPO — PSIT',
    tagline: 'Annual Technical Project Exhibition & Innovation Challenge',
    description:
      'Selected as a Grand Finalist at TECHEXPO, PSIT’s premier technical exhibition and innovation showcase. Presented working prototypes, defended system engineering, live performance, and real-world utility before faculty panels, industry judges, and academic peers.',
    tags: ['Project Exhibition', 'Live Demonstration', 'Hardware/Software', 'System Design', 'PSIT Kanpur'],
    journeyTitle: 'Exhibition Highlights',
    milestones: [
      { step: '01', title: 'Project Screening', desc: 'Rigorous technical review of project architecture, feasibility, and innovation.' },
      { step: '02', title: 'Grand Finalist Shortlist', desc: 'Selected into the Grand Finale round among top student projects across campus.' },
      { step: '03', title: 'Live Jury Demonstration', desc: 'Presented live working prototype and interactive demo to faculty and jury panel.' },
    ],
  },
];

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        padding: '2.5rem',
        position: 'relative',
      }}
    >
      {/* Top meta strip */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid var(--color-border)',
        marginBottom: '2rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            background: 'rgba(0, 255, 102, 0.08)',
            border: '1px solid var(--color-accent)',
            padding: '0.3rem 0.75rem',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--color-accent)',
              boxShadow: '0 0 8px var(--color-accent)',
            }} />
            {item.badge}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-text-dim)',
            letterSpacing: '0.08em',
          }}>
            {item.subBadge}
          </span>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--color-text-dim)',
          letterSpacing: '0.08em',
          display: 'flex',
          gap: '1rem',
        }}>
          <span>{item.date}</span>
          <span>•</span>
          <span>{item.location}</span>
        </div>
      </div>

      {/* Main content grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2.5rem',
        alignItems: 'start',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            {item.organizer}
          </p>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'var(--color-white)',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}>
            {item.title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-text-dim)',
            letterSpacing: '0.06em',
            marginBottom: '1.25rem',
          }}>
            {item.tagline}
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
          }}>
            {item.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {item.tags.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* Right side — Timeline & Key Milestones */}
        <div style={{
          background: 'var(--color-surface-2)',
          border: '1px solid var(--color-border)',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
          }}>
            {item.journeyTitle}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {item.milestones.map((m) => (
              <div key={m.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-accent)',
                  background: 'var(--color-accent-dim)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  flexShrink: 0,
                }}>{m.step}</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-white)' }}>
                    {m.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-dim)', lineHeight: 1.5 }}>
                    {m.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HackathonsSection() {
  return (
    <section className="section" id="hackathons">
      <div className="container">
        <div className="section-header">
          <FadeUpBlock>
            <p className="section-label">
              <span className="section-number">05</span> Achievements
            </p>
            <h2 className="section-title">
              Hacka<span className="dim">thons</span> & Honors
            </h2>
          </FadeUpBlock>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {achievements.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
