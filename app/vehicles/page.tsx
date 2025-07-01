import { VehicleGrid } from '@/components/vehicle-grid';
import { VehicleFilters } from '@/components/vehicle-filters';

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Vehicle Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of premium vehicles, from luxury sedans to high-performance sports cars and eco-friendly electric vehicles.
          </p>
        </div>
        
        <VehicleFilters />
        <VehicleGrid />
      </div>
    </div>
  );
}