import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Fuel, Settings } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'AutoCraft Elegance',
    category: 'Luxury Sedan',
    price: '$85,000',
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['V6 Engine', 'AWD', 'Premium Interior'],
    isElectric: false,
    specs: {
      engine: '3.0L V6 Turbo',
      power: '365 HP',
      acceleration: '0-60 in 5.2s'
    }
  },
  {
    id: 2,
    name: 'AutoCraft Thunder',
    category: 'Sports Car',
    price: '$120,000',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['V8 Engine', 'RWD', 'Track Mode'],
    isElectric: false,
    specs: {
      engine: '5.0L V8',
      power: '500 HP',
      acceleration: '0-60 in 3.8s'
    }
  },
  {
    id: 3,
    name: 'AutoCraft EcoVolt',
    category: 'Electric SUV',
    price: '$75,000',
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['Dual Motor', 'AWD', '400mi Range'],
    isElectric: true,
    specs: {
      engine: 'Dual Electric Motors',
      power: '402 HP',
      acceleration: '0-60 in 4.5s'
    }
  }
];

export function FeaturedVehicles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest collection of premium vehicles, each engineered 
            to deliver exceptional performance and unmatched luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {vehicle.isElectric ? (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <Zap className="w-3 h-3 mr-1" />
                      Electric
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <Fuel className="w-3 h-3 mr-1" />
                      Hybrid
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90">
                    {vehicle.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                  <span className="text-2xl font-bold text-blue-600">{vehicle.price}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center">
                    <Settings className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                    <div className="font-medium">{vehicle.specs.engine}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-orange-500">{vehicle.specs.power}</div>
                    <div className="text-gray-500">Power</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{vehicle.specs.acceleration}</div>
                    <div className="text-gray-500">0-60 mph</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Test Drive
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            View All Vehicles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}