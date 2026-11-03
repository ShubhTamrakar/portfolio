const items = [
  'Python', 'React', 'Firebase', 'Raspberry Pi', 'Scikit-learn',
  'Machine Learning', 'Full Stack', 'Biometric Systems', 'AI Agents',
  'TypeScript', 'Open To Hire', 'PSIT Kanpur',
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

export function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track" aria-hidden="true">
        {allItems.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
