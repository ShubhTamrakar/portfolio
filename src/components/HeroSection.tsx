import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const terminalLines = [
  { type: 'cmd', content: 'whoami' },
  { type: 'output', content: 'shubh_tamrakar — cs & ai engineer' },
  { type: 'cmd', content: 'ls skills/' },
  { type: 'output', content: 'python  java  react  firebase  scikit-learn' },
  { type: 'cmd', content: 'cat status.txt' },
  { type: 'output', content: '✦ 3rd runner-up @ AHGV BuildVerse 2026' },
  { type: 'output', content: '✦ grand finalist @ TECHEXPO PSIT' },
  { type: 'output', content: '✦ available for internships & projects' },
  { type: 'cmd', content: 'git log --oneline -3' },
  { type: 'output', content: 'a3f2c1e  feat: biometric voting system' },
  { type: 'output', content: 'b7d9e4f  feat: real-time chat platform' },
  { type: 'output', content: 'c2a8d3b  feat: ml model failure analyzer (wip)' },
];

function useTextScramble(text: string, active: boolean) {
  const [displayed, setDisplayed] = useState('');
  const CHARS = '!@#$%^&*()_+-=[]{}|;:<>?01';
  const frameRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    let iteration = 0;
    const maxIterations = text.length * 3;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration / 3) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iteration++;
      if (iteration >= maxIterations) {
        setDisplayed(text);
        clearInterval(interval);
      }
    }, 30);
    frameRef.current = 0;
    return () => clearInterval(interval);
  }, [text, active]);

  return displayed;
}

export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const displayed = useTextScramble(text, isActive);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsActive(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} data-hover>
      {displayed || text}
    </span>
  );
}

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= terminalLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 350);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="grid-bg" />
      <div className="radial-gradient-bg" />

      <div className="container">
        <div className="hero-grid">
          {/* Left: Identity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hero-eyebrow">
              B.Tech CS + AI — PSIT Kanpur
            </p>
            <h1 className="hero-title">
              <span className="name-accent">SHUBH</span>
              <span>TAM</span>
              <span className="line-stroke">RAKAR</span>
            </h1>
            <p className="hero-subtitle">
              Building intelligent systems at the intersection of{' '}
              <strong style={{ color: '#e8e8e8', fontWeight: 500 }}>full-stack engineering</strong>{' '}
              and <strong style={{ color: '#e8e8e8', fontWeight: 500 }}>AI/ML</strong>. 
              From biometric voting hardware to real-time platforms — I ship things that work.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View Projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Shubh_Tamrakar_ResumeUpdated.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Download CV
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1V9M3 6L7 10L11 6M2 13H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-terminal">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">shubh@dev:~</span>
              </div>
              <div className="terminal-body">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className={`terminal-line${line.type === 'output' ? ' terminal-output' : ''}`}>
                    {line.type === 'cmd' && (
                      <span className="terminal-prompt">→</span>
                    )}
                    <span className={line.type === 'cmd' ? 'terminal-cmd' : ''}>
                      {line.content.includes('✦') ? (
                        <>
                          <span className="highlight">✦</span>
                          {line.content.replace('✦', '')}
                        </>
                      ) : line.content}
                    </span>
                  </div>
                ))}
                {visibleLines <= terminalLines.length && (
                  <div className="terminal-line">
                    <span className="terminal-prompt">→</span>
                    <span className="cursor-blink" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  );
}
