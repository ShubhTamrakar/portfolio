export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            © {year} <span>Shubh Tamrakar</span> — Built with React + Vite
          </div>
          <div className="footer-right">
            <span style={{ color: 'var(--color-accent)' }}>●</span> Open to opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}
