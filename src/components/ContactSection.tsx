import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const contactLinks = [
  {
    label: 'Email',
    value: 'shubh1234tamrakar@gmail.com',
    href: 'mailto:shubh1234tamrakar@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/ShubhTamrakar',
    href: 'https://github.com/ShubhTamrakar',
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

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <FadeUpBlock>
            <p className="section-label">
              <span className="section-number">06</span> Get in Touch
            </p>
            <h2 className="contact-tagline">
              Let's build something <span>remarkable</span> together.
            </h2>
            <p className="contact-text">
              I'm currently seeking software development or AI/ML internship opportunities. 
              Whether you have a project idea, want to collaborate, or just want to say hi — 
              my inbox is always open.
            </p>
            <a
              href="mailto:shubh1234tamrakar@gmail.com"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              Send me a message
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </FadeUpBlock>

          <FadeUpBlock delay={0.15}>
            <div className="contact-links">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-link-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div>
                    <div className="contact-link-label">{link.label}</div>
                    <div className="contact-link-value">{link.value}</div>
                  </div>
                  <svg className="contact-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 15L15 1M15 1H5M15 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </FadeUpBlock>
        </div>
      </div>
    </section>
  );
}
