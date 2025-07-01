import { Card, CardContent } from '@/components/ui/card';

export function CompanyHistory() {
  const milestones = [
    {
      year: '1990',
      title: 'Company Founded',
      description: 'AutoCraft Motors was established with a vision to revolutionize automotive manufacturing.'
    },
    {
      year: '1995',
      title: 'First Production Line',
      description: 'Launched our first manufacturing facility producing 10,000 vehicles annually.'
    },
    {
      year: '2005',
      title: 'Global Expansion',
      description: 'Expanded operations to 15 countries with state-of-the-art manufacturing plants.'
    },
    {
      year: '2015',
      title: 'Electric Revolution',
      description: 'Introduced our first fully electric vehicle line, leading the sustainable mobility movement.'
    },
    {
      year: '2020',
      title: 'AI Integration',
      description: 'Integrated artificial intelligence in manufacturing processes and vehicle safety systems.'
    },
    {
      year: '2024',
      title: 'Carbon Neutral',
      description: 'Achieved carbon neutrality across all manufacturing operations worldwide.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three decades of innovation, growth, and commitment to automotive excellence.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}