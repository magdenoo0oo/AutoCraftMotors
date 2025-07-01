import Link from 'next/link';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">AutoCraft Motors</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting the future of mobility with innovative, sustainable, and luxurious vehicles 
              that exceed expectations in performance and design.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/vehicles" className="text-gray-300 hover:text-white transition-colors">Our Vehicles</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Test Drive</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Service Centers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Vehicle Categories</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Luxury Sedans</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Sports Cars</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Electric Vehicles</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">SUVs</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Hybrid Models</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 Innovation Drive, Detroit, MI 48201</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@autocraftmotors.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6 mt-12">
  <p className="text-gray-400 text-sm text-center md:text-left">
    © 2024 AutoCraft Motors. All rights reserved. Made with <span className="text-red-500">❤️</span> by 
    <span className="text-white font-semibold ml-1">Magdy Zahran</span>
  </p>
  <div className="flex space-x-6 mt-4 md:mt-0">
    <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
    <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
    <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}