import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveMap } from './components/InteractiveMap';
import { AQIExperiment } from './components/AQIExperiment';
import { CausesSection } from './components/CausesSection';
import { SolutionsSection } from './components/SolutionsSection';
import { BeforeAfter } from './components/BeforeAfter';
import { ActionCards } from './components/ActionCards';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1720] text-[#F3F4F7]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero onCTAClick={scrollToSection} />

      {/* Interactive Map Section */}
      <InteractiveMap />

      {/* AQI Experiment Section */}
      <AQIExperiment />

      {/* Causes Section */}
      <CausesSection />

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Before/After Section */}
      <BeforeAfter />

      {/* Action Cards Section */}
      <ActionCards />

      {/* Community Section */}
      <Community />

      {/* Footer */}
      <Footer />
    </div>
  );
}
