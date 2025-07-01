import { CompanyHistory } from '@/components/company-history';
import { ManufacturingProcess } from '@/components/manufacturing-process';
import { TeamSection } from '@/components/team-section';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About AutoCraft Motors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over three decades, we've been at the forefront of automotive innovation, 
            crafting vehicles that combine luxury, performance, and sustainability.
          </p>
        </div>
      </div>
      
      <CompanyHistory />
      <ManufacturingProcess />
      <TeamSection />
    </div>
  );
}