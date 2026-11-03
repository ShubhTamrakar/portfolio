import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certifications = [
  {
    name: 'Building AI Agents and Agentic Workflows',
    issuer: 'IBM via Coursera',
    badge: 'Specialization (3 Courses)',
    date: 'October 2026',
    verifyUrl: 'https://coursera.org/verify/specialization/YTJALOQDMP49',
    code: 'YTJALOQDMP49',
  },
  {
    name: 'Agentic AI with LangChain and LangGraph',
    issuer: 'IBM via Coursera',
    badge: 'Course Certificate',
    date: 'October 2026',
    verifyUrl: 'https://coursera.org/verify/82LX11ELTTM5',
    code: '82LX11ELTTM5',
  },
  {
    name: 'Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI',
    issuer: 'IBM via Coursera',
    badge: 'Course Certificate',
    date: 'October 2026',
    verifyUrl: 'https://coursera.org/verify/NjZVET2R3XXL',
    code: 'NjZVET2R3XXL',
  },
  {
    name: 'Fundamentals of Building AI Agents',
    issuer: 'IBM via Coursera',
    badge: 'Course Certificate',
    date: 'October 2026',
    verifyUrl: 'https://coursera.org/verify/9LND0EWKSUXF',
    code: '9LND0EWKSUXF',
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

export function CertificationsSection() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <FadeUpBlock>
            <p className="section-label">
              <span className="section-number">04</span> Verified Credentials
            </p>
            <h2 className="section-title">
              Certif<span className="dim">ications</span>
            </h2>
          </FadeUpBlock>
        </div>

        <FadeUpBlock delay={0.1}>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div className="cert-issuer">{cert.issuer}</div>
                  {cert.badge && (
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: cert.badge.includes('Specialization') ? 'var(--color-accent)' : 'var(--color-text-dim)',
                      background: cert.badge.includes('Specialization') ? 'rgba(0, 255, 102, 0.08)' : 'var(--color-surface-2)',
                      border: `1px solid ${cert.badge.includes('Specialization') ? 'var(--color-accent)' : 'var(--color-border)'}`,
                      padding: '0.15rem 0.5rem',
                    }}>
                      {cert.badge}
                    </span>
                  )}
                </div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-date">{cert.date}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--color-text-dim)',
                  letterSpacing: '0.06em',
                  padding: '0.4rem 0.75rem',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  width: 'fit-content',
                }}>
                  ID: {cert.code}
                </div>
                <div className="cert-verify">
                  Verify on Coursera
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </FadeUpBlock>

        {/* IBM context block */}
        <FadeUpBlock delay={0.2}>
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              flexShrink: 0,
            }}>
              Context
            </div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
            }}>
              These credentials, culminating in the 3-course IBM Specialization, focus on designing, building, and orchestrating AI agent systems using modern frameworks. 
              LangChain, LangGraph, CrewAI, AutoGen, and BeeAI represent the current state-of-the-art in multi-agent AI engineering.
            </p>
          </div>
        </FadeUpBlock>
      </div>
    </section>
  );
}
