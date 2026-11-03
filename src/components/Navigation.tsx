import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMobileLink = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo">
              <span className="accent">{'>'}</span> shubh.dev
            </a>

            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="nav-link">{item.label}</a>
                </li>
              ))}
            </ul>

            <a href="mailto:shubh1234tamrakar@gmail.com" className="nav-cta">
              Hire Me
            </a>

            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line" style={{
                transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'
              }} />
              <span className="hamburger-line" style={{
                opacity: mobileOpen ? 0 : 1
              }} />
              <span className="hamburger-line" style={{
                transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
              }} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                className="mobile-nav-link"
                onClick={() => handleMobileLink(item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{ background: 'none', border: 'none', fontFamily: 'inherit' }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="mailto:shubh1234tamrakar@gmail.com"
              className="nav-cta"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
