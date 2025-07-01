export function StatsSection() {
  const stats = [
    { value: '500,000+', label: 'Vehicles Delivered' },
    { value: '25', label: 'Countries Worldwide' },
    { value: '15', label: 'Manufacturing Plants' },
    { value: '98%', label: 'Customer Satisfaction' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Millions Worldwide</h2>
          <p className="text-xl text-blue-100">Our commitment to excellence is reflected in our achievements</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}