'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Zap, Fuel, Settings } from 'lucide-react';

const allVehicles = [
  {
    id: 1,
    name: 'AutoCraft Elegance',
    category: 'Luxury Sedan',
    price: '$85,000',
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    isElectric: false,
    specs: { engine: '3.0L V6 Turbo', power: '365 HP', acceleration: '0-60 in 5.2s' }
  },
  {
    id: 2,
    name: 'AutoCraft Thunder',
    category: 'Sports Car',
    price: '$120,000',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    isElectric: false,
    specs: { engine: '5.0L V8', power: '500 HP', acceleration: '0-60 in 3.8s' }
  },
  {
    id: 3,
    name: 'AutoCraft EcoVolt',
    category: 'Electric SUV',
    price: '$75,000',
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    isElectric: true,
    specs: { engine: 'Dual Electric Motors', power: '402 HP', acceleration: '0-60 in 4.5s' }
  },
  {
    id: 4,
    name: 'AutoCraft Luxe',
    category: 'Luxury SUV',
    price: '$95,000',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    isElectric: false,
    specs: { engine: '4.0L V8 Twin-Turbo', power: '450 HP', acceleration: '0-60 in 4.8s' }
  },
  {
    id: 5,
    name: 'AutoCraft Swift',
    category: 'Compact Car',
    price: '$45,000',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    isElectric: false,
    specs: { engine: '2.0L I4 Turbo', power: '250 HP', acceleration: '0-60 in 6.1s' }
  },
  {
    id: 6,
    name: 'AutoCraft EcoMax',
    category: 'Electric Sedan',
    price: '$68,000',
    image: 'https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    isElectric: true,
    specs: { engine: 'Single Electric Motor', power: '350 HP', acceleration: '0-60 in 5.5s' }
  }
];

export function VehicleGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allVehicles.map((vehicle) => (
        <Card key={vehicle.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
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
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                onClick={() => toggleFavorite(vehicle.id)}
              >
                <Heart 
                  className={`h-4 w-4 ${favorites.includes(vehicle.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                <p className="text-sm text-gray-500">{vehicle.category}</p>
              </div>
              <span className="text-2xl font-bold text-blue-600">{vehicle.price}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
              <div className="text-center">
                <Settings className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                <div className="font-medium text-xs">{vehicle.specs.engine}</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-orange-500">{vehicle.specs.power}</div>
                <div className="text-gray-500 text-xs">Power</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-xs">{vehicle.specs.acceleration}</div>
                <div className="text-gray-500 text-xs">0-60 mph</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm">
                View Details
              </Button>
              <Button variant="outline" className="flex-1 text-sm">
                Test Drive
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}