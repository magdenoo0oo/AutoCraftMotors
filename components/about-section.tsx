import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Zap, Shield } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Design',
      description: 'Our vehicles have won over 50 international design awards for innovation and excellence.'
    },
    {
      icon: Users,
      title: 'Expert Craftsmanship',
      description: 'Over 5,000 skilled engineers and craftsmen dedicated to automotive perfection.'
    },
    {
      icon: Zap,
      title: 'Sustainable Future',
      description: 'Leading the transition to electric mobility with cutting-edge battery technology.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: '5-star safety ratings across our entire vehicle lineup with advanced AI safety systems.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Engineering Excellence Since 1990
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              AutoCraft Motors has been at the forefront of automotive innovation for over three decades. 
              We combine traditional craftsmanship with cutting-edge technology to create vehicles that 
              don't just meet expectations—they exceed them.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">ISO 9001 Certified Manufacturing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Carbon Neutral Production by 2025</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">24/7 Customer Support Worldwide</span>
              </div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3637765/pexels-photo-3637765.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Car manufacturing facility"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">30+</div>
              <div className="text-sm text-gray-600">Years of Innovation</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}