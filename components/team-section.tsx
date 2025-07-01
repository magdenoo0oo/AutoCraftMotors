import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function TeamSection() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      expertise: 'Strategic Leadership',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: '20+ years leading automotive innovation and sustainable manufacturing initiatives.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Robotics',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Pioneer in automotive AI systems and autonomous vehicle technology development.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Design',
      expertise: 'Automotive Design',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Award-winning designer with expertise in luxury vehicle aesthetics and user experience.'
    },
    {
      name: 'David Kim',
      role: 'Chief Engineering Officer',
      expertise: 'Powertrain Systems',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Expert in electric vehicle technology and sustainable powertrain development.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries driving automotive innovation and leading AutoCraft Motors 
            toward a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <Badge variant="secondary" className="mb-4">
                  {member.expertise}
                </Badge>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}