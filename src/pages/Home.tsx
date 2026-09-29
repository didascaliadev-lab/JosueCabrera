import { HeroSection } from '../sections/HeroSection';
import { IntroSection } from '../sections/IntroSection';
import { UniversesSection } from '../sections/UniversesSection';
import { FrustratedMusicianSection } from '../sections/FrustratedMusicianSection';
import { AboutPreviewSection } from '../sections/AboutPreviewSection';
import { ContactCTASection } from '../sections/ContactCTASection';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <UniversesSection />
      <FrustratedMusicianSection />      
      <AboutPreviewSection />
      <ContactCTASection />
    </main>
  );
};