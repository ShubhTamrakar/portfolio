import './index.css';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { HackathonsSection } from './components/HackathonsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  return (
    <>
      {/* Boot loading screen */}
      <LoadingScreen />

      {/* Film grain texture */}
      <div className="noise-overlay" aria-hidden="true" />
      
      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <HeroSection />
        
        <div className="section-divider" />
        <Marquee />
        <div className="section-divider" />

        <AboutSection />
        
        <div className="section-divider" />

        <ProjectsSection />
        
        <div className="section-divider" />

        <EducationSection />
        
        <div className="section-divider" />

        <CertificationsSection />
        
        <div className="section-divider" />

        <HackathonsSection />
        
        <div className="section-divider" />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
