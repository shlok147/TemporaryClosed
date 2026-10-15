import AuroraBackground from './components/AuroraBackground';
import SpotlightCursor from './components/SpotlightCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

/**
 * GattuAI Fallback Page
 *
 * A premium, single-page maintenance/fallback experience.
 * Assembled from modular components with a layered visual structure:
 *   Layer 0: Aurora background blobs
 *   Layer 1: Spotlight cursor effect
 *   Layer 2: Content (Header → Hero → Contact → Footer)
 */
export default function App() {
  return (
    <>
      {/* Visual layers */}
      <AuroraBackground />
      <SpotlightCursor />

      {/* Content */}
      <Header />
      <main>
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
