import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function LocationMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">Find Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
            alt="AutoCraft Motors Location"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h3 className="font-bold text-gray-900">AutoCraft Motors</h3>
              <p className="text-sm text-gray-600">123 Innovation Drive</p>
              <p className="text-sm text-gray-600">Detroit, MI 48201</p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Located in the heart of Detroit's automotive district, easily accessible 
            from major highways and public transportation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}