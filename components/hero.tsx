import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury car manufacturing"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Crafting the
              <span className="text-orange-400 block">Future of Mobility</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience automotive excellence with our cutting-edge vehicles that blend 
              luxury, performance, and sustainability. Every car is a masterpiece of 
              engineering and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Explore Our Vehicles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg"  className="border-white text-white hover:bg-white hover:text-blue-900">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">30+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">500K+</div>
                  <div className="text-sm text-blue-100">Vehicles Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">25</div>
                  <div className="text-sm text-blue-100">Global Markets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">98%</div>
                  <div className="text-sm text-blue-100">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}