import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: [
        '123 Innovation Drive',
        'Detroit, MI 48201',
        'United States'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Sales: +1 (555) 123-4567',
        'Service: +1 (555) 123-4568',
        'Parts: +1 (555) 123-4569'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'sales@autocraftmotors.com',
        'service@autocraftmotors.com',
        'info@autocraftmotors.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 8:00 PM',
        'Saturday: 9:00 AM - 6:00 PM',
        'Sunday: 10:00 AM - 5:00 PM'
      ]
    }
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <item.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}