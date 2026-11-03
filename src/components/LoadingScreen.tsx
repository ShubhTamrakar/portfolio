import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setShow(false), 400);
      }
      setProgress(Math.min(p, 100));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--color-void)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
            }}
          >
            {'>'} Initializing...
          </motion.div>

          <div style={{ width: '240px', position: 'relative' }}>
            <div style={{
              height: '1px',
              background: 'var(--color-border)',
              width: '100%',
            }} />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
              style={{
                height: '1px',
                background: 'var(--color-accent)',
                position: 'absolute',
                top: 0,
                left: 0,
                boxShadow: '0 0 10px var(--color-accent-glow)',
              }}
            />
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-text-dim)',
            letterSpacing: '0.1em',
          }}>
            {Math.floor(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
