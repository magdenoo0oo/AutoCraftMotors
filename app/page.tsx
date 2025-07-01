import { Hero } from '@/components/hero';
import { FeaturedVehicles } from '@/components/featured-vehicles';
import { AboutSection } from '@/components/about-section';
import { StatsSection } from '@/components/stats-section';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedVehicles />
      <AboutSection />
      <StatsSection />
    </div>
  );
}