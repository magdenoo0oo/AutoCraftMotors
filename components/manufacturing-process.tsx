import { Card, CardContent } from '@/components/ui/card';
import { Cog, Zap, Shield, Award } from 'lucide-react';

export function ManufacturingProcess() {
  const processes = [
    {
      icon: Cog,
      title: 'Precision Engineering',
      description: 'Advanced robotics and AI-driven manufacturing ensure every component meets our exacting standards.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format'
    },
    {
      icon: Zap,
      title: 'Sustainable Production',
      description: 'Solar-powered facilities and recycled materials reduce our environmental footprint by 60%.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop&auto=format'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing protocols ensure every vehicle meets the highest safety and performance standards.',
      image: 'https://images.pexels.com/photos/3637762/pexels-photo-3637762.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Award,
      title: 'Final Inspection',
      description: 'Each vehicle undergoes comprehensive inspection by our master craftsmen before delivery.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art manufacturing process combines traditional craftsmanship 
            with cutting-edge technology to create vehicles of unmatched quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <process.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}